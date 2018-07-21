import {Component, h} from 'preact';
import Header, {HEIGHT as HEADER_HEIGHT} from '../Header/index';
import TabList from '../TabList/index';
import Browser from '../../services/browser';
import {IWindow} from "../../types";

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
      if (activeTabRef) {
        const bounds = activeTabRef.getBoundingClientRect();
        window.scrollTo(0, bounds.top - HEADER_HEIGHT);
      }
    }
  }

  updateTabs() {
    Browser.queryTabs().then((windows) => {
      this.setState({ windows })
    })
  }

  handleActivateTab = (tabId: number) => {
    Browser.activateTab(tabId).then(() => this.updateTabs())
  };

  handleCloseTab = (tabId: number) => {
    Browser.closeTab(tabId).then(() => this.updateTabs())
  };

  handleRegisterActiveTabRef = (ref: HTMLDivElement | null) => {
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
