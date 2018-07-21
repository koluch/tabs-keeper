import { h, Component } from 'preact';
import {ITab} from "../../types";
const styles = require('./index.less');

interface IProps {
  tabs: ITab[],
}

export const HEIGHT = 24;

export default class extends Component<IProps> {
  render() {
    return (
      <div className={styles.root} style={{ height: `${HEIGHT}px` }}>
       {this.props.tabs.length} tabs
      </div>
    )
  }
}
