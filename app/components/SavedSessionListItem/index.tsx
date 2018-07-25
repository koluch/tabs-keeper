import {Component, h} from 'preact';
import cn from 'classnames';
import {ISavedSession, ISavedSessionHeader} from "../../types";
import * as dateHelper from "../../helpers/date";

const styles = require('./index.less');

interface IProps {
  savedSessionHeader: ISavedSessionHeader,
  isActive: boolean,
  onClick: () => void,
}

export default class extends Component<IProps> {
  render() {
    const savedSessionHeader = this.props.savedSessionHeader;
    return (
      <div
        className={cn(styles.root, this.props.isActive && styles.isActive)}
        onClick={this.props.onClick}
      >
        <div>
          {dateHelper.formatDate(savedSessionHeader.date)} ({dateHelper.humanizeDuration(new Date().getTime() - savedSessionHeader.date)})
        </div>
        <div>
          {savedSessionHeader.windowsCount} windows, {savedSessionHeader.tabsCount} tabs
        </div>
      </div>
    )
  }
}
