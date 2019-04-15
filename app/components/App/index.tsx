import { Component, h } from "preact";
import Header, { HEIGHT as HEADER_HEIGHT, UITab } from "../Header/index";
import Footer, { HEIGHT as FOOTER_HEIGHT } from "../Footer/index";
import TabList from "../TabList/index";
import Browser from "../../services/browser";
import SessionStorage from "../../services/sessionStorage";
import {
  INewTab,
  ISavedSession,
  ISavedSessionHeader,
  ISession,
  ITab,
  IWindow
} from "../../types";
import { getScrollPosition } from "../../helpers/browser";
import toast from "../../helpers/toast";
import SavedSessionsList from "../SavedSessionsList";
import plural from "../../helpers/plural";
import * as selection from "../../helpers/selection";
import { HEIGHT as GROUP_OPERATIONS_HEIGHT } from "../GroupOperations";

const styles = require("./index.less");

function filterWindows(windows: IWindow[], search: string): IWindow[] {
  return windows
    .map(window => ({
      ...window,
      tabs: window.tabs.filter(tab => {
        const titleMatches =
          tab.title !== null &&
          tab.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        const urlMatches = tab.url
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
        return titleMatches || urlMatches;
      })
    }))
    .filter(window => window.tabs.length > 0);
}

function getAllTabs(windows: IWindow[]): ITab[] {
  return Array.prototype.concat.apply([], windows.map(({ tabs }) => tabs));
}

interface IProps {}
interface IState {
  search: string;
  isSelectionMode: boolean;
  selection: selection.ISelection;

  activeUITab: UITab;
  session: ISession | null;
  savedSessionHeaders: ISavedSessionHeader[];
  activeSavedSessionHeader: ISavedSessionHeader | null;
  activeSavedSession: ISavedSession | null;
}

export default class extends Component<IProps, IState> {
  state: IState;
  activeTabRef: HTMLDivElement | null;

  constructor(props: IProps) {
    super(props);
    this.state = {
      search: "",
      selection: selection.create(),
      isSelectionMode: false,
      activeUITab: "CURRENT",
      session: null,
      savedSessionHeaders: [],
      activeSavedSessionHeader: null,
      activeSavedSession: null
    };
  }

  componentDidMount() {
    this.updateTabs();
    this.updateSavedSessions();

    // Force render to update durations
    setInterval(() => {
      this.setState({});
    }, 10000);
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    if (prevState.session === null && this.state.session !== null) {
      const activeTabRef = this.activeTabRef;

      // todo: figure out why this doesn't work without timeout
      setTimeout(() => {
        if (activeTabRef) {
          const bounds = activeTabRef.getBoundingClientRect();
          const scrollPosition = getScrollPosition();
          window.scrollTo(0, bounds.top + scrollPosition.y - HEADER_HEIGHT);
        }
      }, 200);
    }
  }

  updateTabs() {
    Browser.getCurrentSession()
      .then(session => {
        this.setState({ session });
      })
      .catch(e => {
        console.error(`Unable to get current session`, e);
      });
  }

  updateSavedSessions() {
    SessionStorage.getList().then(savedSessionHeaders => {
      this.setState({
        savedSessionHeaders
      });
    });
  }

  updateActiveSavedSessions() {
    const { activeSavedSessionHeader } = this.state;
    if (activeSavedSessionHeader) {
      SessionStorage.get(activeSavedSessionHeader.id).then(
        (savedSession: ISavedSession | null) => {
          if (savedSession) {
            this.setState({
              activeSavedSession: savedSession
            });
          } else {
            toast(
              `Unable to find session with id ${
                activeSavedSessionHeader.id
              } in storage`
            );
          }
        }
      );
    }
  }

  handleActivateTab = (tabId: number) => {
    if (this.state.session === null) {
      console.error("Unable to activate tab when session is null");
      return;
    }
    for (const window of this.state.session.windows) {
      for (const nextTab of window.tabs) {
        if (nextTab.id === tabId) {
          Promise.all([
            Browser.activateTab(nextTab.id),
            Browser.activateWindow(nextTab.windowId)
          ]).then(() => this.updateTabs());
          return;
        }
      }
    }
  };

  handleChangeTabSelection = (tabId: number, selected: boolean) => {
    this.setState((state: IState) => ({
      selection: selected
        ? selection.add(state.selection, tabId)
        : selection.remove(state.selection, tabId)
    }));
  };

  handleCloseTab = (tabId: number) => {
    Browser.closeTab(tabId).then(() => this.updateTabs());
  };

  handleDiscardTab = (tabId: number) => {
    Browser.discardTab(tabId).then(() => this.updateTabs());
  };

  handleCloseWindow = (windowId: number) => {
    Browser.closeWindow(windowId).then(() => this.updateTabs());
  };

  handleRegisterActiveTabRef = (
    windowId: number,
    ref: HTMLDivElement | null
  ) => {
    if (this.state.session === null) {
      return;
    }
    const window = this.state.session.windows.find(({ id }) => id === windowId);
    if (!window || !window.focused) {
      return;
    }
    this.activeTabRef = ref;
  };

  handleSaveCurrentSession = () => {
    if (this.state.session === null) {
      console.error(`Unable to save null session`);
      return;
    }

    SessionStorage.create(this.state.session)
      .then(() => {
        toast("Session saved!");
        this.updateSavedSessions();
      })
      .catch(e => {
        console.error(e);
        toast("Unable to create session!", "ERROR");
      });
  };

  handleChangeSelectionMode = () => {
    this.setState((state: IState) => ({
      isSelectionMode: !state.isSelectionMode,
      selection: selection.create(),
    }));
  };

  handleSelectSavedSession = (
    activeSavedSessionHeader: ISavedSessionHeader | null
  ) => {
    this.setState(
      {
        activeSavedSessionHeader,
        activeSavedSession: null
      },
      () => {
        if (activeSavedSessionHeader) {
          // todo: async set state, check for is mounted?
          SessionStorage.get(activeSavedSessionHeader.id).then(
            (savedSession: ISavedSession | null) => {
              if (savedSession) {
                this.setState({
                  activeSavedSession: savedSession
                });
              } else {
                toast(
                  `Unable to find session with id ${
                    activeSavedSessionHeader.id
                  } in storage`
                );
              }
            }
          );
        }
      }
    );
  };

  handleReopenWindow = (tabs: INewTab[]) => {
    Browser.openWindow(tabs)
      .then(() => {
        toast("Window reopened!");
        this.updateTabs();
      })
      .catch(e => {
        console.error(e);
        toast("Unable to reopen window!", "ERROR");
      });
  };

  handleReopenTabs = (tabs: INewTab[]) => {
    Browser.openTabs(tabs)
      .then(() => {
        toast(`${plural(tabs.length, "Tab")} reopened!`);
        this.updateTabs();
      })
      .catch(e => {
        console.error(e);
        toast("Unable to reopen tabs!", "ERROR");
      });
  };

  handleDeleteSavedSession = (sessionId: number) => {
    SessionStorage.delete(sessionId)
      .then(() => {
        toast("Session deleted!");
        this.updateSavedSessions();
      })
      .catch(e => {
        console.error(e);
        toast("Unable to delete session!", "ERROR");
      });
  };

  handleDeleteSavedSessionWindow = (sessionId: number, windowId: number) => {
    SessionStorage.update(sessionId, session => ({
      ...session,
      windows: session.windows.filter(({ id }) => id !== windowId)
    }))
      .then(() => {
        this.updateActiveSavedSessions();
        this.updateSavedSessions();
      })
      .catch(e => {
        console.error(e);
        toast("Unable to delete session window!", "ERROR");
      });
  };

  handleDeleteSavedSessionTab = (sessionId: number, tabId: number) => {
    SessionStorage.update(sessionId, session => ({
      ...session,
      windows: session.windows.map(window => ({
        ...window,
        tabs: window.tabs.filter(({ id }) => id !== tabId)
      }))
    }))
      .then(() => {
        this.updateActiveSavedSessions();
        this.updateSavedSessions();
      })
      .catch(e => {
        console.error(e);
        toast("Unable to delete session tab!", "ERROR");
      });
  };

  handleChangeSearch = (search: string): void => {
    this.setState({
      search,
      selection: selection.create(),
    });
  };

  handleSwitchUITab = (uiTab: UITab) => {
    this.setState({
      activeUITab: uiTab
    });
  };

  handleSelectionClose = () => {
    Promise.all(
      selection
        .getIds(this.state.selection)
        .map(id =>
          Browser.closeTab(id).then(() => this.handleChangeTabSelection(id, false))
        )
    ).then(() => this.updateTabs());
  };

  handleSelectionDiscard = () => {
    Promise.all(
      selection
        .getIds(this.state.selection)
        .map(id =>
          Browser.discardTab(id)
        )
    ).then(() => this.updateTabs());
  };

  handleSelectionInvert = () => {
    this.setState((state: IState) => {
      const { session, search } = state;
      if (session) {
        let newSelection = state.selection;

        for (const tab of getAllTabs(filterWindows(session.windows, search))) {
          if (selection.isSelected(state.selection, tab.id)) {
            newSelection = selection.remove(newSelection, tab.id);
          } else {
            newSelection = selection.add(newSelection, tab.id);
          }
        }

        return {
          selection: newSelection
        };
      }

      return null;
    });
  };

  handleSelectionAddAll = () => {
    this.setState((state: IState) => {
      const { session, search } = state;
      if (session) {
        let newSelection = state.selection;

        for (const tab of getAllTabs(filterWindows(session.windows, search))) {
          newSelection = selection.add(newSelection, tab.id);
        }

        return {
          selection: newSelection
        };
      }

      return null;
    });
  };

  handleSelectionRemoveAll = () => {
    this.setState((state: IState) => {
      const { session, search } = state;
      if (session) {
        let newSelection = state.selection;

        for (const tab of getAllTabs(filterWindows(session.windows, search))) {
          newSelection = selection.remove(newSelection, tab.id);
        }

        return {
          selection: newSelection
        };
      }

      return null;
    });
  };

  renderCurrentSession(session: ISession) {
    const { isSelectionMode } = this.state;

    return (
      <div
        style={{
          marginTop: `${HEADER_HEIGHT + (isSelectionMode ? GROUP_OPERATIONS_HEIGHT : 0)}px`,
          marginBottom: `${FOOTER_HEIGHT}px`,
        }}
      >
        <TabList
          windows={filterWindows(session.windows, this.state.search)}
          isSelectionMode={this.state.isSelectionMode}
          selection={this.state.selection}
          onChangeTabSelection={this.handleChangeTabSelection}
          onActivateTab={this.handleActivateTab}
          onCloseTab={this.handleCloseTab}
          onDiscardTab={this.handleDiscardTab}
          onCloseWindow={this.handleCloseWindow}
          onRegisterActiveTabRef={this.handleRegisterActiveTabRef}
        />
      </div>
    );
  }

  renderSavedSessionsList() {
    return (
      <div
        style={{
          marginTop: `${HEADER_HEIGHT}px`,
          marginBottom: `${FOOTER_HEIGHT}px`,
        }}
      >
        <SavedSessionsList
          savedSessionHeaders={this.state.savedSessionHeaders}
          activeSavedSessionHeader={this.state.activeSavedSessionHeader}
          activeSavedSession={this.state.activeSavedSession}
          onSelectSession={this.handleSelectSavedSession}
          onReopenWindow={this.handleReopenWindow}
          onReopenTabs={this.handleReopenTabs}
          onDeleteSession={this.handleDeleteSavedSession}
          onDeleteWindow={this.handleDeleteSavedSessionWindow}
          onDeleteTab={this.handleDeleteSavedSessionTab}
        />
      </div>
    );
  }

  render() {
    const { session, search, activeUITab, savedSessionHeaders, isSelectionMode } = this.state;

    if (session === null) {
      // todo: make proper layout for this message
      return <div>No session selected</div>;
    }

    return (
      <div className={styles.root}>
        <Header
          windows={filterWindows(session.windows, search)}
          selection={this.state.selection}
          savedSessionHeaders={savedSessionHeaders}
          activeUITab={activeUITab}
          search={search}
          isSelectionMode={isSelectionMode}
          onChangeSearch={this.handleChangeSearch}
          onSwitchUITab={this.handleSwitchUITab}
          onSelectionClose={this.handleSelectionClose}
          onSelectionDiscard={this.handleSelectionDiscard}
          onSelectionInvert={this.handleSelectionInvert}
          onSelectionAddAll={this.handleSelectionAddAll}
          onSelectionRemoveAll={this.handleSelectionRemoveAll}
          onClickSelectionMode={this.handleChangeSelectionMode}
        />
        <div
          className={styles.content}
        >
          {activeUITab === "CURRENT" && this.renderCurrentSession(session)}
          {activeUITab === "SAVED" && this.renderSavedSessionsList()}
        </div>
        {activeUITab === "CURRENT" && (
          <Footer
            onClickSaveCurrent={this.handleSaveCurrentSession}
            windows={session.windows}
          />
        )}
      </div>
    );
  }
}
