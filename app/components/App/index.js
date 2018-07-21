"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const preact_1 = require("preact");
const index_1 = require("../Header/index");
const index_2 = require("../TabList/index");
const browser_1 = require("../../services/browser");
const styles = require('./index.less');
class default_1 extends preact_1.Component {
    constructor(props) {
        super(props);
        this.handleActivateTab = (tabId) => {
            browser_1.default.activateTab(tabId).then(() => this.updateTabs());
        };
        this.handleCloseTab = (tabId) => {
            browser_1.default.closeTab(tabId).then(() => this.updateTabs());
        };
        this.state = {
            tabs: [],
        };
    }
    componentDidMount() {
        this.updateTabs();
    }
    updateTabs() {
        browser_1.default.queryTabs().then((tabs) => {
            this.setState({ tabs: [...tabs] });
        });
    }
    render() {
        return (preact_1.h("div", { className: styles.root },
            preact_1.h(index_1.default, { tabs: this.state.tabs }),
            preact_1.h("div", { className: styles.content },
                preact_1.h(index_2.default, { tabs: this.state.tabs, onActivateTab: this.handleActivateTab, onCloseTab: this.handleCloseTab }))));
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map