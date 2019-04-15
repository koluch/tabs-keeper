import { Component, h } from "preact";
import cn from "classnames";

const styles = require("./index.less");

interface IProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isDisabled?: boolean;
}

export default class extends Component<IProps> {
  static defaultProps = {
    isDisabled: false,
  };

  handleChange = (e: KeyboardEvent) => {
    const { target } = e;
    if (target instanceof HTMLInputElement) {
      this.props.onChange(target.value);
    }
  };

  render() {
    const { value, placeholder, isDisabled } = this.props;
    return (
      <input
        className={cn(styles.root)}
        value={value}
        onInput={this.handleChange}
        disabled={isDisabled}
        placeholder={placeholder}
      />
    );
  }
}
