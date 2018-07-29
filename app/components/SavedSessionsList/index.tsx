import {Component, h} from 'preact';
import {INewTab, ISavedSession, ISavedSessionHeader, ITab} from "../../types";
import SavedSessionListItem from '../SavedSessionListItem';
import TabList from '../TabList';

const styles = require('./index.less');

interface IProps {
  savedSessionHeaders: ISavedSessionHeader[],
  activeSavedSession: ISavedSession | null,
  activeSavedSessionHeader: ISavedSessionHeader | null,
  onSelectSession: (sessionHeader: ISavedSessionHeader | null) => void,
  onReopenWindow: (tabs: INewTab[]) => void,
  onReopenTabs: (tabs: INewTab[]) => void,
  onDeleteSession: (sessionId: number) => void,
  onDeleteWindow: (sessionId: number, windowId: number) => void,
  onDeleteTab: (sessionId: number, tabId: number) => void,
}

export default class extends Component<IProps> {
  renderActiveSession(activeSavedSession: ISavedSession | null) {
    if (activeSavedSession) {
      const handleReopenAllWindows = () => {
        activeSavedSession.windows.forEach((window) => this.props.onReopenWindow(window.tabs));
      };
      const handleReopenAllTabs = () => {
        const tabs: INewTab[] = activeSavedSession.windows
        .map(({ tabs }) => tabs)
        .reduce((acc, x) => [...acc, ...x], []); // flatten
        this.props.onReopenTabs(tabs);
      };
      const handleActivateTab = (tabId: number) => {
        let tab: ITab | undefined;
        for (const window of activeSavedSession.windows) {
          tab = window.tabs.find(({ id }) => id === tabId);
          if (tab) { break }
        }
        if (tab) {
          this.props.onReopenTabs([tab]);
        } else {
          console.error(`Unable to open tab with id ${tabId}`)
        }
      };
      const handleCloseWindow = (windowId: number) => {
        this.props.onDeleteWindow(activeSavedSession.header.id, windowId);
      };
      const handleCloseTab = (tabId: number) => {
        this.props.onDeleteTab(activeSavedSession.header.id, tabId);
      };

      return (
        <div className={styles.tabList}>
          <div className={styles.sessionControls}>
            <button onClick={handleReopenAllWindows}>Reopen all windows</button>
            <button onClick={handleReopenAllTabs}>Reopen all tabs</button>
          </div>
          <TabList
            windows={activeSavedSession.windows}
            onReopenWindow={this.props.onReopenWindow}
            onActivateTab={handleActivateTab}
            onCloseWindow={handleCloseWindow}
            onCloseTab={handleCloseTab}
          />
        </div>
      )
    } else {
      return (<div>{'loading...'}</div>); // todo: make proper loader
    }
  }

  render() {
    const activeSavedSessionHeader = this.props.activeSavedSessionHeader;
    // todo: improve no sessions message
    return (
      <div className={styles.root}>
        {this.props.savedSessionHeaders.length === 0 && <div>No saved sessions</div>}
        {[...this.props.savedSessionHeaders].reverse().map((sessionHeader: ISavedSessionHeader) => {
          const isActive = activeSavedSessionHeader ? activeSavedSessionHeader.id === sessionHeader.id : false;

          return [
            <SavedSessionListItem
              key={sessionHeader.id}
              isActive={isActive}
              onClick={() => { this.props.onSelectSession(isActive ? null : sessionHeader) }}
              onClickDelete={() => { this.props.onDeleteSession(sessionHeader.id) }}
              savedSessionHeader={sessionHeader}
            />,
            isActive ? this.renderActiveSession(this.props.activeSavedSession) : null,
          ]
        })}
      </div>
    )
  }

}
