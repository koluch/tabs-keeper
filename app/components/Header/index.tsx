import { Component, h } from "preact";
import { ISavedSessionHeader, IWindow } from "../../types";
import cn from "classnames";
import plural from "../../helpers/plural";
import GroupOperations from "../GroupOperations";
import MainOperations from "../MainOperations";
import { ISelection } from "../../helpers/selection";

const styles = require("./index.less");

export type UITab = "CURRENT" | "SAVED";

interface IProps {
  activeUITab: UITab;
  windows: IWindow[];
  savedSessionHeaders: ISavedSessionHeader[];
  search: string;
  selection: ISelection;
  isSelectionMode: boolean;
  onSelectionClose: () => void;
  onSelectionInvert: () => void;
  onSelectionAddAll: () => void;
  onSelectionRemoveAll: () => void;
  onChangeSearch: (search: string) => void;
  onSwitchUITab: (uiTab: UITab) => void;
  onClickSaveCurrent: () => void;
  onClickSelectionMode: () => void;
}

export const HEIGHT = 82;

export default class extends Component<IProps> {
  renderTabs() {
    return (
      <div class={styles.tabs}>
        <div
          class={cn(
            styles.tab,
            this.props.activeUITab === "CURRENT" && styles.isActive
          )}
          onClick={() => this.props.onSwitchUITab("CURRENT")}
        >
          Current
        </div>
        <div
          class={cn(
            styles.tab,
            this.props.activeUITab === "SAVED" && styles.isActive
          )}
          onClick={() => this.props.onSwitchUITab("SAVED")}
        >
          Saved
        </div>
      </div>
    );
  }

  renderCurrentSessionInfo() {
    const windowsCount = this.props.windows.length;
    const tabsCount = this.props.windows
      .map(({ tabs }) => tabs.length)
      .reduce((acc, x) => acc + x, 0);
    return (
      <div className={styles.info}>
        <MainOperations
          search={this.props.search}
          isSelectionMode={this.props.isSelectionMode}
          onClickSelectionMode={this.props.onClickSelectionMode}
          onClickSaveCurrent={this.props.onClickSaveCurrent}
          onChangeSearch={this.props.onChangeSearch}
        />
        <GroupOperations
          windows={this.props.windows}
          selection={this.props.selection}
          isSelectionMode={this.props.isSelectionMode}
          onClose={this.props.onSelectionClose}
          onInvert={this.props.onSelectionInvert}
          onAddAll={this.props.onSelectionAddAll}
          onRemoveAll={this.props.onSelectionRemoveAll}
        />
      </div>
    );
  }

  renderSavedSessionsInfo() {
    const sessionsCount = this.props.savedSessionHeaders.length;
    return (
      <div className={styles.info}>
        {sessionsCount} {plural(sessionsCount, "saved session")}
      </div>
    );
  }

  renderInfo() {
    switch (this.props.activeUITab) {
      case "CURRENT":
        return this.renderCurrentSessionInfo();
      case "SAVED":
        return this.renderSavedSessionsInfo();
      default:
        return null;
    }
  }

  render() {
    return (
      <div className={styles.root} style={{ height: `${HEIGHT}px` }}>
        {this.renderTabs()}
        {this.renderInfo()}
      </div>
    );
  }
}
