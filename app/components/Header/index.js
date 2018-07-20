import styles from './index.less';
import { h } from 'preact';
export default class {
  render() {
    return (
      <div className={styles.root}>
       {this.props.tabs.length} tabs
      </div>
    )
  }
}
