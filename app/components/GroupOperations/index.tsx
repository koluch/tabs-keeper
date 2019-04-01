import { Component, h } from "preact";
import * as selection from "../../helpers/selection";
import { IWindow } from "../../types";

const styles = require("./index.less");

interface IProps {
  windows: IWindow[];
  selection: selection.ISelection;
  isSelectionMode: boolean;
  onClose: () => void;
  onInvert: () => void;
  onAddAll: () => void;
  onRemoveAll: () => void;
}

export default class extends Component<IProps> {
  render(): JSX.Element {
    const { isSelectionMode, windows } = this.props;
    const s = this.props.selection;
    const selectedIds = selection.getIds(s);
    const isAllSelected = windows.every(({ tabs }) => tabs.every(({ id }) => selection.isSelected(s, id)));
    const isSelectionEmpty = selectedIds.length === 0;
    return (
      <div className={styles.root}>
        <div className={styles.section}>
          <input
            className={styles.checkbox}
            onClick={isAllSelected ? this.props.onRemoveAll : this.props.onAddAll}
            disabled={!isSelectionMode}
            type="checkbox"
            checked={isAllSelected}
          />
          <button disabled={!isSelectionMode} onClick={this.props.onInvert}>Invert</button>
        </div>
        <div className={styles.section}>
          <button disabled={!isSelectionMode || isSelectionEmpty} onClick={this.props.onClose}>
            Close
          </button>
          {/* <button disabled={!isSelectionMode}>Unload sel.</button> */}
        </div>
      </div>
    );
  }
}
