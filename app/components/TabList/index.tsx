import cn from 'classnames';
import { h, Component } from 'preact';
import Tab from '../Tab/index'
import {ITab} from "../../types";

const styles = require('./index.less');

interface IProps {
  onActivateTab: (tabId: number) => void,
  onCloseTab: (tabId: number) => void,
  tabs: ITab[],
}

export default class extends Component<IProps> {
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
