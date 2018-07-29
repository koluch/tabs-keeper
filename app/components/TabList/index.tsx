import cn from 'classnames';
import {h, Component, Ref} from 'preact';
import Tab from '../Tab/index'
import {INewTab, ITab, IWindow} from "../../types";
import CloseIcon from '../CloseIcon';

const styles = require('./index.less');

interface IProps {
  windows: IWindow[],
  onReopenWindow?: (tabs: INewTab[]) => void,
  onActivateTab?: (tabId: number) => void,
  onCloseTab?: (tabId: number) => void,
  onCloseWindow?: (windowId: number) => void,
  onRegisterActiveTabRef?: (windowId: number, ref: HTMLDivElement | null) => void,
}

export default class extends Component<IProps> {
  renderWindowHeader(window: IWindow, i: number) {
    const { onReopenWindow, onCloseWindow } = this.props;
    return (
      <div class={styles.windowHeader}>
        <span className={styles.windowTitle}>Window #{i + 1}</span>
        {onReopenWindow && (
          <button onClick={() => onReopenWindow(window.tabs)}>
            Reopen
          </button>
        )}
        {onCloseWindow && <CloseIcon className={styles.closeIcon} onClick={() => onCloseWindow(window.id)} />}
      </div>
    )
  }

  renderWindow = (window: IWindow, i: number) => {
    return (
      <div className={cn(styles.window, window.focused && styles.isActive)}>
        {this.renderWindowHeader(window, i)}
        {...window.tabs.map((tab) => {
          const { onActivateTab, onCloseTab, onRegisterActiveTabRef } = this.props;
          return (
            <Tab
              key={tab.id}
              tab={tab}
              onActivate={onActivateTab ? () => onActivateTab(tab.id) : null}
              onClose={onCloseTab ? () => onCloseTab(tab.id) : null}
              onRegisterRef={onRegisterActiveTabRef
                ? (ref) => { if (tab.active) onRegisterActiveTabRef(window.id, ref); }
                : null
              }
            />
          );
        })}
      </div>
    )
  };

  render() {
    return (
      <div>
        {this.props.windows.map(this.renderWindow)}
      </div>
    )
  }
}
