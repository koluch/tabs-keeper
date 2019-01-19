import { h, render } from "preact";
import App from "./components/App";

console.log("process.env.NODE_ENV", process.env.NODE_ENV);

document.addEventListener("DOMContentLoaded", () => {
  const appEl = document.getElementById("app");
  if (appEl === null) {
    throw new Error(
      `#app element not found, this element is required to render preact app to`
    );
  }
  render(<App />, appEl);
});
