import styles from './index.less';
import { h, Component } from 'preact';
import Header from '../Header';
import TabList from '../TabList';
import Browser from '../../services/browser';
export default class extends Component {

  constructor(props) {
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

  handleActivateTab = (tabId) => {
    Browser.activateTab(tabId).then(() => this.updateTabs())
  };

  handleCloseTab = (tabId) => {
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
