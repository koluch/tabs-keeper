import { Component, h } from "preact";
import Button from "../../uikit/Button";
import { IWindow } from "../../types";

const styles = require("./index.less");

export type UITab = "CURRENT" | "SAVED";

interface IProps {
  onClickSaveCurrent: () => void;
  windows: IWindow[];
}

export const HEIGHT = 32;

export default class extends Component<IProps> {
  render() {
    const windowsCount = this.props.windows.length;
    const tabsCount = this.props.windows
      .map(({ tabs }) => tabs.length)
      .reduce((acc, x) => acc + x, 0);

    return (
      <div className={styles.root} style={{ height: HEIGHT }}>
        <div className={styles.section}>
          {`${windowsCount} windows, ${tabsCount} tabs`}
        </div>
        <div className={styles.section}>
          <Button className={styles.button} onClick={this.props.onClickSaveCurrent} title={'Save'} />
        </div>
      </div>
    );
  }
}
