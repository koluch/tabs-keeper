"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const preact_1 = require("preact");
const styles = require('./index.less');
class default_1 extends preact_1.Component {
    render() {
        return (preact_1.h("div", { className: styles.root },
            this.props.tabs.length,
            " tabs"));
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map