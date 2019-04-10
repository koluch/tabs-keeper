import { Component, h } from "preact";
import cn from "classnames";

const styles = require("./index.less");

interface IProps {
  type?: "DEFAULT" | "PRIMARY";
  size?: "MICRO" | "DEFAULT" | "PUFFY";
  icon?: string;
  title?: string;
  isDisabled?: boolean;
  onClick: () => void;
  className?: string;
}

export default class extends Component<IProps> {
  static defaultProps = {
    type: "DEFAULT",
    size: "DEFAULT",
    isDisabled: false,
  };

  render() {
    const { title, type, size, onClick, icon, isDisabled, className } = this.props;
    return (
      <button
        className={cn(styles.root, className, styles[`type-${type}`], styles[`size-${size}`])}
        onClick={onClick}
        disabled={isDisabled}
      >
        {icon && <img className={styles.icon} src={icon} />}
        {title && <div className={styles.title}>{title}</div>}
      </button>
    );
  }
}
