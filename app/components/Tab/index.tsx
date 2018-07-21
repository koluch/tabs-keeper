import cn from 'classnames';
import { h, Component } from 'preact';
import {ITab} from "../../types";

const styles = require('./index.less');

interface IProps {
    onActivate: () => void,
    onClose: () => void,
    tab: ITab,
}

export default class extends Component<IProps> {
  render() {
    const { tab } = this.props;

    return (
      <div className={cn(styles.tab, tab.active && styles.isActive)}>
        <img
          src={tab.favIconUrl || '/no-favicon.png'}
          className={styles.favIcon}
        />
        <div
          className={styles.title}
          onClick={this.props.onActivate}
        >
          {tab.title}
        </div>
        <img
          className={styles.closeIcon}
          src={'/close.svg'}
          onClick={this.props.onClose}
        />
      </div>
    )
  }
}
