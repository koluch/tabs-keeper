"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classnames_1 = require("classnames");
const preact_1 = require("preact");
const styles = require('./index.less');
class default_1 extends preact_1.Component {
    render() {
        const { tab } = this.props;
        return (preact_1.h("div", { className: classnames_1.default(styles.tab, tab.active && styles.isActive) },
            preact_1.h("img", { src: tab.favIconUrl || '/no-favicon.png', className: styles.favIcon }),
            preact_1.h("div", { className: styles.title, onClick: this.props.onActivate }, tab.title),
            preact_1.h("img", { className: styles.closeIcon, src: '/close.svg', onClick: this.props.onClose })));
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map