import { Component, h } from "preact";
import cn from 'classnames';
import SearchPanel from "../SearchPanel";
import Button from "../../uikit/Button";

const styles = require("./index.less");

interface IProps {
  search: string;
  isSelectionMode: boolean;
  onChangeSearch: (search: string) => void;
  onClickSelectionMode: () => void;
  onClickSaveCurrent: () => void;
}

export default class extends Component<IProps> {
  render(): JSX.Element {
    return (
      <div className={styles.root}>
        <div class={cn(styles.section, styles.fill)}>
          <SearchPanel
            search={this.props.search}
            onChangeSearch={this.props.onChangeSearch}
          />
        </div>
        <div class={styles.section}>
          <Button size="MICRO" className={styles.button} onClick={this.props.onClickSelectionMode} icon={'/icons/selection-mode-icon.svg'} />
          <Button size="MICRO" className={styles.button} onClick={this.props.onClickSaveCurrent} title={'Save'} />
        </div>
      </div>
    );
  }
}
