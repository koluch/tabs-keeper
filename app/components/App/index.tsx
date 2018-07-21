import { h, Component } from 'preact';
import Header from '../Header/index';
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

  constructor(props: IProps) {
    super(props);
    this.state = {
      tabs: [],
    }
  }

  componentDidMount() {
    this.updateTabs();
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

  render() {
    return (
      <div className={styles.root}>
        <Header tabs={this.state.tabs} />
        <div className={styles.content}>
          <TabList
            tabs={this.state.tabs}
            onActivateTab={this.handleActivateTab}
            onCloseTab={this.handleCloseTab}
          />
        </div>
      </div>
    )
  }
}
