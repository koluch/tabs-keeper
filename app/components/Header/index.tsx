import { h, Component } from 'preact';
import {ITab, IWindow} from "../../types";
const styles = require('./index.less');

interface IProps {
  windows: IWindow[],
}

export const HEIGHT = 24;

export default class extends Component<IProps> {
  render() {
    const tabsCount = this.props.windows
      .map(({ tabs }) => tabs.length)
      .reduce((acc, x) => acc + x, 0);
    return (
      <div className={styles.root} style={{ height: `${HEIGHT}px` }}>
        {tabsCount} tabs
      </div>
    )
  }
}
