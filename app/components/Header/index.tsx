import { h, Component } from 'preact';
import {ITab, IWindow} from "../../types";
import cn from 'classnames';
const styles = require('./index.less');

export type UITab = 'CURRENT' | 'SAVED';

interface IProps {
  activeUITab: UITab,
  windows: IWindow[],
  onSwitchUITab: (uiTab: UITab) => void,
  onClickSaveCurrent: () => void,
}

export const HEIGHT = 48;

export default class extends Component<IProps> {
  renderTabs() {
    return (
      <div class={styles.tabs}>
        <div
          class={cn(styles.tab, this.props.activeUITab === 'CURRENT' && styles.isActive)}
          onClick={() => this.props.onSwitchUITab('CURRENT')}
        >
          Current
        </div>
        <div
          class={cn(styles.tab, this.props.activeUITab === 'SAVED' && styles.isActive)}
          onClick={() => this.props.onSwitchUITab('SAVED')}
        >
          Saved
        </div>
      </div>
    )
  }

  renderCurrentSessionInfo() {
    const tabsCount = this.props.windows
    .map(({ tabs }) => tabs.length)
    .reduce((acc, x) => acc + x, 0);
    return (
      <div className={styles.info}>
        <div>{tabsCount} tabs</div>
        <button onClick={this.props.onClickSaveCurrent}>Save</button>
      </div>
    )
  }

  renderSavedSessionsInfo() {
    return (
      <div className={styles.info}>

      </div>
    )
  }

  renderInfo() {
    switch (this.props.activeUITab) {
      case 'CURRENT': return this.renderCurrentSessionInfo();
      case 'SAVED': return this.renderSavedSessionsInfo();
      default:
    }
  }

  render() {
    return (
      <div className={styles.root} style={{ height: `${HEIGHT}px` }}>
        {this.renderTabs()}
        {this.renderInfo()}
      </div>
    )
  }
}
