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
  onClickSelectionMode: () => void;
}

export const HEIGHT = 58;

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
    return (
      <div className={styles.info}>
        <MainOperations
          search={this.props.search}
          isSelectionMode={this.props.isSelectionMode}
          onClickSelectionMode={this.props.onClickSelectionMode}
          onChangeSearch={this.props.onChangeSearch}
        />
        {this.props.isSelectionMode && (
          <GroupOperations
            windows={this.props.windows}
            selection={this.props.selection}
            isSelectionMode={this.props.isSelectionMode}
            onClose={this.props.onSelectionClose}
            onInvert={this.props.onSelectionInvert}
            onAddAll={this.props.onSelectionAddAll}
            onRemoveAll={this.props.onSelectionRemoveAll}
          />
        )}
      </div>
    );
  }

  renderSavedSessionsInfo() {
    const sessionsCount = this.props.savedSessionHeaders.length;
    return (
      <div className={styles.info}>
        <div className={styles.savedSessionsInfo}>
          {sessionsCount} {plural(sessionsCount, "saved session")}
        </div>
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
      <div className={styles.root} style={{ minHeight: HEIGHT }}>
        {this.renderTabs()}
        {this.renderInfo()}
      </div>
    );
  }
}
