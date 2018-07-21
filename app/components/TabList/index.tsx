import cn from 'classnames';
import {h, Component, Ref} from 'preact';
import Tab from '../Tab/index'
import {ITab, IWindow} from "../../types";

const styles = require('./index.less');

interface IProps {
  windows: IWindow[],
  onActivateTab: (tabId: number) => void,
  onCloseTab: (tabId: number) => void,
  onRegisterActiveTabRef: (ref: HTMLDivElement | null) => void,
}

export default class extends Component<IProps> {
  renderWindow = (window: IWindow, i: number) => {
    return [
      <div class={styles.windowTitle}>Window #{i + 1}</div>,
      ...window.tabs.map((tab) => (
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
      )),
    ]
  };

  render() {
    return (
      <div>
        {this.props.windows.map(this.renderWindow)}
      </div>
    )
  }
}
