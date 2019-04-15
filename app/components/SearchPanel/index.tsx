import { Component, h } from "preact";
import TextInput from "../../uikit/TextInput";

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
      <TextInput
        value={this.props.search}
        placeholder={'Type to search'}
        onChange={this.props.onChangeSearch}
      />
    );
  }
}
