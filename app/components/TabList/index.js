"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const preact_1 = require("preact");
const index_1 = require("../Tab/index");
const styles = require('./index.less');
class default_1 extends preact_1.Component {
    render() {
        return (preact_1.h("div", null, this.props.tabs.map((tab) => (preact_1.h(index_1.default, { tab: tab, onActivate: () => this.props.onActivateTab(tab.id), onClose: () => this.props.onCloseTab(tab.id) })))));
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map