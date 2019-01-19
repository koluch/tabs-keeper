import { h } from "preact";
import cn from "classnames";

const styles = require("./index.less");

interface IProps {
  className?: string;
  onClick: (e: MouseEvent) => void;
}

export default (props: IProps) => (
  <img
    className={cn(styles.root, props.className)}
    src={"/close.svg"}
    onClick={props.onClick}
  />
);
