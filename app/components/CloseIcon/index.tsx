import {h} from 'preact';

const styles = require('./index.less');

interface IProps {
  onClick: () => void,
}

export default (props: IProps) => (
  <img
    className={styles.root}
    src={'/close.svg'}
    onClick={props.onClick}
  />
)
