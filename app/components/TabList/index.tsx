import cn from "classnames";
import { h, Component, Ref } from "preact";
import Tab from "../Tab/index";
import { INewTab, ITab, IWindow } from "../../types";
import CloseIcon from "../CloseIcon";
import * as selection from "../../helpers/selection";
import Button from "../../uikit/Button";
import Icon from "../Icon";

const styles = require("./index.less");

interface IProps {
  windows: IWindow[];
  selection: selection.ISelection;
  isSelectionMode: boolean;
  onChangeTabSelection?: (tabId: number, selected: boolean) => void;
  onReopenWindow?: (tabs: INewTab[]) => void;
  onActivateTab?: (tabId: number) => void;
  onCloseTab?: (tabId: number) => void;
  onDiscardTab?: (tabId: number) => void;
  onCloseWindow?: (windowId: number) => void;
  onRegisterActiveTabRef?: (
    windowId: number,
    ref: HTMLDivElement | null
  ) => void;
}

export default class extends Component<IProps> {
  static defaultProps = {
    isSelectionMode: false,
    selection: selection.create(),
  };

  renderWindowHeader = (window: IWindow, i: number) => {
    const { isSelectionMode, onReopenWindow, onCloseWindow } = this.props;
    const isAllTabsSelected = window.tabs.every(({ id }) => selection.isSelected(this.props.selection, id));
    return (
      <div class={styles.windowHeader}>
        {this.props.isSelectionMode && (
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={isAllTabsSelected}
            onClick={() => {
              if (this.props.onChangeTabSelection != null) {
                for (const tab of window.tabs) {
                  this.props.onChangeTabSelection(tab.id, !isAllTabsSelected);
                }
              }
            }}
          />
        )}
        <span className={styles.windowTitle}>Window #{i + 1}</span>
        {onReopenWindow && (
          <Button onClick={() => onReopenWindow(window.tabs)} title={'Reopen'} />
        )}
        {(onCloseWindow && !isSelectionMode) && (
          <Icon
            className={styles.closeIcon}
            src={'/icons/close-icon.svg'}
            onClick={() => onCloseWindow(window.id)}
          />
        )}
      </div>
    );
  }

  renderWindow = (window: IWindow, i: number) => {
    const {isSelectionMode} = this.props;

    return (
      <div className={cn(styles.window, (window.focused || isSelectionMode) && styles.isActive)}>
        {this.renderWindowHeader(window, i)}
        {...window.tabs.map(tab => {
          const {
            isSelectionMode,
            onActivateTab,
            onCloseTab,
            onDiscardTab,
            onRegisterActiveTabRef,
            onChangeTabSelection,
          } = this.props;
          const isTabSelected = selection.isSelected(this.props.selection, tab.id);
          return (
            <Tab
              key={tab.id}
              tab={tab}
              isSelectionMode={isSelectionMode}
              isSelected={isTabSelected}
              onChangeSelection={onChangeTabSelection ? () => onChangeTabSelection(tab.id, !isTabSelected) : null}
              onActivate={(!isSelectionMode && onActivateTab) ? () => onActivateTab(tab.id) : null}
              onDiscard={(!isSelectionMode && onDiscardTab) ? () => onDiscardTab(tab.id) : null}
              onClose={(!isSelectionMode && onCloseTab) ? () => onCloseTab(tab.id) : null}
              onRegisterRef={
                onRegisterActiveTabRef
                  ? ref => {
                      if (tab.active) onRegisterActiveTabRef(window.id, ref);
                    }
                  : null
              }
            />
          );
        })}
      </div>
    );
  };

  render() {
    return <div>{this.props.windows.map(this.renderWindow)}</div>;
  }
}
