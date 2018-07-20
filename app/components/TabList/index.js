import cn from 'classnames';
import styles from './index.less';
import { h, Component } from 'preact';
import Tab from '../Tab'

export default class extends Component {
  render() {
    return (
      <div>
        {this.props.tabs.map((tab) => (
          <Tab
            tab={tab}
            onActivate={() => this.props.onActivateTab(tab.id)}
            onClose={() => this.props.onCloseTab(tab.id)}
          />
        ))}
      </div>
    )
  }
}
