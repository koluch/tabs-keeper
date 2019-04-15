import { Component, h } from "preact";
import cn from "classnames";

const styles = require("./index.less");

interface IProps {
  type: "DEFAULT" | "PRIMARY";
  icon?: string;
  title?: string;
  tooltip?: string;
  isDisabled: boolean;
  onClick: () => void;
  className?: string;
}

export default class extends Component<IProps> {
  static defaultProps = {
    type: "DEFAULT",
    isDisabled: false,
  };

  render() {
    const { title, tooltip, type, onClick, icon, isDisabled, className } = this.props;
    return (
      <button
        className={cn(styles.root, className, styles[`type-${type}`])}
        onClick={onClick}
        disabled={isDisabled}
        title={tooltip}
      >
        {icon && <img className={styles.icon} src={icon} />}
        {title && <div className={styles.title}>{title}</div>}
      </button>
    );
  }
}
