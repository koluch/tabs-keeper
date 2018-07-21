import { h, Component } from 'preact';
import {ITab} from "../../types";
const styles = require('./index.less');

interface IProps {
  tabs: ITab[],
}

export default class extends Component<IProps> {
  render() {
    return (
      <div className={styles.root}>
       {this.props.tabs.length} tabs
      </div>
    )
  }
}
