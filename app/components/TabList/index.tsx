import cn from 'classnames';
import {h, Component, Ref} from 'preact';
import Tab from '../Tab/index'
import {ITab} from "../../types";

const styles = require('./index.less');

interface IProps {
  tabs: ITab[],
  onActivateTab: (tabId: number) => void,
  onCloseTab: (tabId: number) => void,
  onRegisterActiveTabRef: (ref: HTMLDivElement | null) => void,
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
            onRegisterRef={(ref) => {
              if (tab.active) {
                this.props.onRegisterActiveTabRef(ref);
              }
            }}
          />
        ))}
      </div>
    )
  }
}
