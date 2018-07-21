import {Component, h} from 'preact';
import Header, {HEIGHT as HEADER_HEIGHT} from '../Header/index';
import TabList from '../TabList/index';
import Browser from '../../services/browser';
import {ITab, IWindow} from "../../types";
import {getElementPosition, getScrollPosition} from "../../helpers/browser";

const styles = require('./index.less');

interface IProps {}
interface IState {
  windows: IWindow[],
}

export default class extends Component<IProps, IState> {
  state: IState;
  activeTabRef: HTMLDivElement | null;

  constructor(props: IProps) {
    super(props);
    this.state = {
      windows: [],
    }
  }

  componentDidMount() {
    this.updateTabs();
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    if (prevState.windows.length === 0 && this.state.windows.length > 0) {
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
    Browser.queryTabs().then((windows) => {
      this.setState({ windows })
    })
  }

  handleActivateTab = (tabId: number) => {
    for (const window of this.state.windows) {
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
    const window = this.state.windows.find(({ id }) => id === windowId);
    if (!window || !window.focused) {
      return;
    }
    this.activeTabRef = ref;
  };

  render() {
    return (
      <div className={styles.root}>
        <Header windows={this.state.windows} />
        <div
          className={styles.content}
          style={{ marginTop: `${HEADER_HEIGHT}px`}}
        >
          <TabList
            windows={this.state.windows}
            onActivateTab={this.handleActivateTab}
            onCloseTab={this.handleCloseTab}
            onRegisterActiveTabRef={this.handleRegisterActiveTabRef}
          />
        </div>
      </div>
    )
  }
}
