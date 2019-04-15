import { h } from "preact";
import cn from "classnames";

const styles = require("./index.less");

interface IProps {
  src: string;
  className?: string;
  onClick: (e: MouseEvent) => void;
  placeholder?: string;
}

export default (props: IProps) => (
  <img
    className={cn(styles.root, props.className)}
    src={props.src}
    onClick={props.onClick}
    title={props.placeholder}
  />
);
