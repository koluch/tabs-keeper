import cn from 'classnames';
import {h, Component, Ref} from 'preact';
import {ITab} from "../../types";

const styles = require('./index.less');

interface IProps {
  tab: ITab,
  onActivate: () => void,
  onClose: () => void,
  onRegisterRef: (ref: HTMLDivElement | null) => void,
}

export default class extends Component<IProps> {
  handleClickTitle = (e: MouseEvent) => {
    e.preventDefault();
    this.props.onActivate();
  };

  render() {
    const { tab, ref } = this.props;

    return (
      <div
        className={cn(styles.tab, tab.active && styles.isActive)}
        ref={(ref) => this.props.onRegisterRef(ref)}
      >
        <img
          src={tab.favIconUrl || '/no-favicon.png'}
          className={styles.favIcon}
        />
        <a
          className={styles.title}
          onClick={this.handleClickTitle}
          href={tab.url}
          title={tab.url}
        >
          {tab.title}
        </a>
        <img
          className={styles.closeIcon}
          src={'/close.svg'}
          onClick={this.props.onClose}
        />
      </div>
    )
  }
}
