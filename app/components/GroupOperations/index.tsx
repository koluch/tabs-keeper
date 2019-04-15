import { Component, h } from "preact";
import * as selection from "../../helpers/selection";
import { ITab, IWindow } from "../../types";
import Button from "../../uikit/Button";

const styles = require("./index.less");

export const HEIGHT = 24;

interface IProps {
  windows: IWindow[];
  selection: selection.ISelection;
  isSelectionMode: boolean;
  onDiscard: () => void;
  onClose: () => void;
  onInvert: () => void;
  onAddAll: () => void;
  onRemoveAll: () => void;
}

function forEveryTab(windows: IWindow[], condition: (tab: ITab) => boolean): boolean {
  for (const window of windows) {
    for (const tab of window.tabs) {
      if (!condition(tab)) {
        return false;
      }
    }
  }
  return true;
}

export default class extends Component<IProps> {
  render(): JSX.Element {
    const { windows } = this.props;
    const s = this.props.selection;
    const isAllSelected = forEveryTab(windows, ({ id }) => selection.isSelected(s, id));
    const isAllSelectedDiscarded = forEveryTab(windows, ({ id, discarded }) => selection.isSelected(s, id) ? discarded : true);
    const isSelectionEmpty = selection.isEmpty(s);
    return (
      <div className={styles.root}>
        <div className={styles.section}>
          <input
            className={styles.checkbox}
            onClick={isAllSelected ? this.props.onRemoveAll : this.props.onAddAll}
            type="checkbox"
            checked={isAllSelected}
          />
          <Button
            onClick={this.props.onInvert}
            title={'Invert selection'}
          />
        </div>
        <div className={styles.section}>
          {!isSelectionEmpty && (
            <Button
              className={styles.actionButton}
              onClick={this.props.onDiscard}
              title={'Discard selected'}
              isDisabled={isAllSelectedDiscarded}
            />
          )}
          {!isSelectionEmpty && (
            <Button
              className={styles.actionButton}
              onClick={this.props.onClose}
              title={'Close selected'}
            />
          )}
        </div>
      </div>
    );
  }
}
