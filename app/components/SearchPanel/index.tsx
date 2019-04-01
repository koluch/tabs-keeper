import { Component, h } from "preact";

const styles = require("./index.less");

interface IProps {
  search: string;
  onChangeSearch: (value: string) => void;
}

export default class extends Component<IProps> {
  handleChangeText = (e: KeyboardEvent) => {
    const { target } = e;
    if (target instanceof HTMLInputElement) {
      this.props.onChangeSearch(target.value);
    }
  };

  render(): JSX.Element {
    return (
      <div className={styles.root}>
        <input
          type="text"
          value={this.props.search}
          onInput={this.handleChangeText}
          className={styles.input}
        />
      </div>
    );
  }
}
