import cn from "classnames";
import { h, Component, Ref } from "preact";
import { ITab } from "../../types";
import CloseIcon from "../CloseIcon";

const styles = require("./index.less");

interface IProps {
  tab: ITab;
  onActivate?: (() => void) | null;
  onClose?: (() => void) | null;
  onRegisterRef?: ((ref: HTMLDivElement | null) => void) | null;
}

export default class extends Component<IProps> {
  handleClickTitle = (e: MouseEvent) => {
    e.preventDefault();
    if (this.props.onActivate) {
      this.props.onActivate();
    }
  };

  render() {
    const { tab } = this.props;
    const { onRegisterRef, onClose } = this.props;
    return (
      <div
        className={cn(styles.tab, tab.active && styles.isActive)}
        ref={onRegisterRef ? ref => onRegisterRef(ref) : undefined}
      >
        <img
          src={tab.favIconUrl || "/no-favicon.png"}
          className={styles.favIcon}
        />
        <a
          className={styles.title}
          onClick={this.handleClickTitle}
          href={tab.url}
          title={tab.url}
        >
          {tab.title || "<no title>"}
        </a>
        {onClose && <CloseIcon onClick={onClose} />}
      </div>
    );
  }
}
