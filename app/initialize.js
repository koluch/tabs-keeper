"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const preact_1 = require("preact");
const App_1 = require("./components/App");
console.log("process.env.NODE_ENV", process.env.NODE_ENV);
document.addEventListener('DOMContentLoaded', () => {
    const appEl = document.getElementById('app');
    if (appEl === null) {
        throw new Error(`#app element not found, this element is required to render preact app to`);
    }
    preact_1.render((preact_1.h(App_1.default, null)), appEl);
});
//# sourceMappingURL=initialize.js.map