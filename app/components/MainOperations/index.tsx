import { Component, h } from "preact";
import cn from 'classnames';
import SearchPanel from "../SearchPanel";

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
          <button onClick={this.props.onClickSelectionMode}>Selection {this.props.isSelectionMode ? 'off' : 'on'}</button>
          <button onClick={this.props.onClickSaveCurrent}>Save</button>
        </div>
      </div>
    );
  }
}
