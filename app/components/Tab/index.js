import cn from 'classnames';
import styles from './index.less';
import { h, Component } from 'preact';

export default class extends Component {
  render() {
    const { tab } = this.props;

    return (
      <div className={cn(styles.tab, tab.active && styles.isActive)}>
        <img
          src={tab.favIconUrl}
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
