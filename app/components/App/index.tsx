import {Component, h} from 'preact';
import Header, {HEIGHT as HEADER_HEIGHT, UITab} from '../Header/index';
import TabList from '../TabList/index';
import Browser from '../../services/browser';
import SessionStorage from '../../services/sessionStorage';
import {ISession, ISavedSessionHeader, ITab, IWindow, ISavedSession, INewTab} from "../../types";
import {getElementPosition, getScrollPosition} from "../../helpers/browser";
import toast from '../../helpers/toast';
import SavedSessionsList from '../SavedSessionsList';

const styles = require('./index.less');

interface IProps {}
interface IState {
  activeUITab: UITab,
  session: ISession | null,
  savedSessionHeaders: ISavedSessionHeader[],
  activeSavedSessionHeader: ISavedSessionHeader | null,
  activeSavedSession: ISavedSession | null,
}

export default class extends Component<IProps, IState> {
  state: IState;
  activeTabRef: HTMLDivElement | null;

  constructor(props: IProps) {
    super(props);
    this.state = {
      activeUITab: 'CURRENT',
      session: null,
      savedSessionHeaders: [],
      activeSavedSessionHeader: null,
      activeSavedSession: null,
    }
  }

  componentDidMount() {
    this.updateTabs();
    this.updateSavedSessions();

    // Force render to update durations
    setInterval(() => {
      this.setState({});
    }, 10000)
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    if (prevState.session === null && this.state.session !== null) {
      const activeTabRef = this.activeTabRef;

      // todo: figure out why this doesn't work without timeout
      setTimeout(() => {
        if (activeTabRef) {
          const bounds = activeTabRef.getBoundingClientRect();
          const scrollPosition = getScrollPosition();
          window.scrollTo(0, bounds.top + scrollPosition.y - HEADER_HEIGHT)
        }
      }, 200)

    }
  }

  updateTabs() {
    Browser.getCurrentSession().then((session) => {
      this.setState({ session })
    })
  }

  updateSavedSessions() {
    SessionStorage.getList().then((savedSessionHeaders) => {
      this.setState({
        savedSessionHeaders,
      })
    })
  }

  updateActiveSavedSessions() {
    const {activeSavedSessionHeader} = this.state;
    if (activeSavedSessionHeader) {
      SessionStorage.get(activeSavedSessionHeader.id).then((savedSession: ISavedSession | null) => {
        if (savedSession) {
          this.setState({
            activeSavedSession: savedSession,
          })
        } else {
          toast(`Unable to find session with id ${activeSavedSessionHeader.id} in storage`);
        }
      })
    }
  }

  handleActivateTab = (tabId: number) => {
    if (this.state.session === null) {
      console.error('Unable to activate tab when session is null');
      return;
    }
    for (const window of this.state.session.windows) {
      for (const nextTab of window.tabs) {
        if (nextTab.id === tabId) {
          Promise.all([
            Browser.activateTab(nextTab.id),
            Browser.activateWindow(nextTab.windowId),
          ])
          .then(() => this.updateTabs())
          return;
        }
      }
    }
  };

  handleCloseTab = (tabId: number) => {
    Browser.closeTab(tabId).then(() => this.updateTabs())
  };

  handleCloseWindow = (windowId: number) => {
    Browser.closeWindow(windowId).then(() => this.updateTabs())
  };

  handleRegisterActiveTabRef = (windowId: number, ref: HTMLDivElement | null) => {
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

    SessionStorage.create(this.state.session).then(() => {
      toast('Session saved!');
      this.updateSavedSessions();
    }).catch((e) => {
      console.error(e);
      toast('Unable to create session!', 'ERROR');
    })
  };

  handleSelectSavedSession = (activeSavedSessionHeader: ISavedSessionHeader | null) => {
    this.setState({
      activeSavedSessionHeader,
      activeSavedSession: null,
    }, () => {
      if (activeSavedSessionHeader) {
        // todo: async set state, check for is mounted?
        SessionStorage.get(activeSavedSessionHeader.id).then((savedSession: ISavedSession | null) => {
          if (savedSession) {
            this.setState({
              activeSavedSession: savedSession,
            })
          } else {
            toast(`Unable to find session with id ${activeSavedSessionHeader.id} in storage`);
          }
        })
      }
    })
  };

  handleReopenWindow = (tabs: INewTab[]) => {
    Browser.openWindow(tabs).then(() => {
      toast('Window reopened!');
      this.updateTabs();
    }).catch((e) => {
      console.error(e);
      toast('Unable to reopen window!', 'ERROR');
    });
  };

  handleReopenTabs = (tabs: INewTab[]) => {
    Browser.openTabs(tabs).then(() => {
      toast('Tabs reopened!');
      this.updateTabs();
    }).catch((e) => {
      console.error(e);
      toast('Unable to reopen tabs!', 'ERROR');
    });
  };

  handleDeleteSavedSession = (sessionId: number) => {
    SessionStorage.delete(sessionId).then(() => {
      toast('Session deleted!');
      this.updateSavedSessions();
    }).catch((e) => {
      console.error(e);
      toast('Unable to delete session!', 'ERROR');
    });
  };

  handleDeleteSavedSessionWindow = (sessionId: number, windowId: number) => {
    SessionStorage.update(sessionId, (session) => ({
      ...session,
      windows: session.windows.filter(({id}) => id !== windowId)
    })).then(() => {
      this.updateActiveSavedSessions();
      this.updateSavedSessions();
    }).catch((e) => {
      console.error(e);
      toast('Unable to delete session window!', 'ERROR');
    });
  };

  handleDeleteSavedSessionTab = (sessionId: number, tabId: number) => {
    SessionStorage.update(sessionId, (session) => ({
      ...session,
      windows: session.windows.map((window) => ({
        ...window,
        tabs: window.tabs.filter(({ id }) => id !== tabId)
      }))
    })).then(() => {
      this.updateActiveSavedSessions();
      this.updateSavedSessions();
    }).catch((e) => {
      console.error(e);
      toast('Unable to delete session tab!', 'ERROR');
    });
  };

  renderCurrentSession(session: ISession) {
    return (
      <TabList
        windows={session.windows}
        onActivateTab={this.handleActivateTab}
        onCloseTab={this.handleCloseTab}
        onCloseWindow={this.handleCloseWindow}
        onRegisterActiveTabRef={this.handleRegisterActiveTabRef}
      />
    );
  }

  renderSavedSessionsList() {
    return (
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
    );
  }

  render() {
    const { session, savedSessionHeaders }= this.state;

    console.log("~~~~~~~~~~~~")
    console.log("this.state.activeSavedSessionHeader", this.state.activeSavedSessionHeader)
    console.log("this.state.activeSavedSession", this.state.activeSavedSession)
    console.log("this.state.savedSessionHeaders", this.state.savedSessionHeaders)

    if (session === null) {
      // todo: make proper layout for this message
      return (
        <div>No session selected</div>
      )
    }

    return (
      <div className={styles.root}>
        <Header
          windows={session.windows}
          savedSessionHeaders={savedSessionHeaders}
          activeUITab={this.state.activeUITab}
          onSwitchUITab={(uiTab: UITab) => {
            this.setState({
              activeUITab: uiTab,
            })
          }}
          onClickSaveCurrent={this.handleSaveCurrentSession}
        />
        <div
          className={styles.content}
          style={{ marginTop: `${HEADER_HEIGHT}px`}}
        >
          {this.state.activeUITab === 'CURRENT' && this.renderCurrentSession(session)}
          {this.state.activeUITab === 'SAVED' && this.renderSavedSessionsList()}
        </div>
      </div>
    )
  }
}
