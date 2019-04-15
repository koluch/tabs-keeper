import { Component, h } from "preact";
import * as selection from "../../helpers/selection";
import { IWindow } from "../../types";
import Button from "../../uikit/Button";

const styles = require("./index.less");

export const HEIGHT = 24;

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
    const { windows } = this.props;
    const s = this.props.selection;
    const selectedIds = selection.getIds(s);
    const isAllSelected = windows.length > 0 && windows.every(({ tabs }) => tabs.every(({ id }) => selection.isSelected(s, id)));
    const isSelectionEmpty = selectedIds.length === 0;
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
              onClick={this.props.onClose}
              title={'Close selected'}
            />
          )}
        </div>
      </div>
    );
  }
}
