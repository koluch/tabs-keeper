import {Component, h} from 'preact';
import cn from 'classnames';
import {ISavedSession, ISavedSessionHeader} from "../../types";
import * as dateHelper from "../../helpers/date";
import plural from "../../helpers/plural";
import CloseIcon from '../CloseIcon';

const styles = require('./index.less');

interface IProps {
  savedSessionHeader: ISavedSessionHeader,
  isActive: boolean,
  onClick: () => void,
  onClickDelete: () => void,
}

export default class extends Component<IProps> {
  render() {
    const savedSessionHeader = this.props.savedSessionHeader;
    return (
      <div
        className={cn(styles.root, this.props.isActive && styles.isActive)}
        onClick={this.props.onClick}
      >
        <div className={styles.left}>
          {dateHelper.formatDate(savedSessionHeader.date)} ({dateHelper.humanizeDuration(new Date().getTime() - savedSessionHeader.date)})
        </div>
        <div className={styles.right}>
          {savedSessionHeader.windowsCount} {plural(savedSessionHeader.windowsCount,'window')}, {savedSessionHeader.tabsCount} {plural(savedSessionHeader.tabsCount,'tab')}
          <CloseIcon
            className={styles.closeIcon}
            onClick={(e) => {
              e.stopPropagation();
              this.props.onClickDelete();
            }}
          />
        </div>
      </div>
    )
  }
}
