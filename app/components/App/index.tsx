import {h, Component, Ref} from 'preact';
import Header, {HEIGHT as HEADER_HEIGHT} from '../Header/index';
import TabList from '../TabList/index';
import Browser from '../../services/browser';
import {ITab} from "../../types";

const styles = require('./index.less');

interface IProps {}
interface IState {
  tabs: ITab[],
}

export default class extends Component<IProps, IState> {
  state: IState;
  activeTabRef: HTMLDivElement | null;

  constructor(props: IProps) {
    super(props);
    this.state = {
      tabs: [],
    }
  }

  componentDidMount() {
    this.updateTabs();
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    console.log("prevProps, prevState", prevProps, prevState)
    if (prevState.tabs.length === 0 && this.state.tabs.length > 0) {
      const activeTabRef = this.activeTabRef;
      if (activeTabRef) {
        const bounds = activeTabRef.getBoundingClientRect();
        window.scrollTo(0, bounds.top - HEADER_HEIGHT);
      }
    }
  }

  updateTabs() {
    Browser.queryTabs().then((tabs) => {
      this.setState({ tabs: [...tabs] })
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
        <Header tabs={this.state.tabs} />
        <div
          className={styles.content}
          style={{ marginTop: `${HEADER_HEIGHT}px`}}
        >
          <TabList
            tabs={this.state.tabs}
            onActivateTab={this.handleActivateTab}
            onCloseTab={this.handleCloseTab}
            onRegisterActiveTabRef={this.handleRegisterActiveTabRef}
          />
        </div>
      </div>
    )
  }
}
