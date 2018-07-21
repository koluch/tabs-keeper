import {Component, h} from 'preact';
import Header, {HEIGHT as HEADER_HEIGHT} from '../Header/index';
import TabList from '../TabList/index';
import Browser from '../../services/browser';
import {ISession, ITab, IWindow} from "../../types";
import {getElementPosition, getScrollPosition} from "../../helpers/browser";

const styles = require('./index.less');

interface IProps {}
interface IState {
  session: ISession | null,
}

export default class extends Component<IProps, IState> {
  state: IState;
  activeTabRef: HTMLDivElement | null;

  constructor(props: IProps) {
    super(props);
    this.state = {
      session: null,
    }
  }

  componentDidMount() {
    this.updateTabs();
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

  render() {
    const session = this.state.session;

    if (session === null) {
      // todo: make proper layout for this message
      return (
        <div>No session selected</div>
      )
    }

    return (
      <div className={styles.root}>
        <Header windows={session.windows} />
        <div
          className={styles.content}
          style={{ marginTop: `${HEADER_HEIGHT}px`}}
        >
          <TabList
            windows={session.windows}
            onActivateTab={this.handleActivateTab}
            onCloseTab={this.handleCloseTab}
            onRegisterActiveTabRef={this.handleRegisterActiveTabRef}
          />
        </div>
      </div>
    )
  }
}
