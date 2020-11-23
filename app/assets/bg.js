const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

function updateIcon() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  browser.browserAction.setIcon({
    path: isDark ? "/icons/icon-dark.svg" : "/icons/icon-light.svg"
  });
}

mediaQueryList.addEventListener("change", updateIcon);
browser.runtime.onInstalled.addListener(updateIcon);
browser.theme.onUpdated.addListener(updateIcon);
updateIcon();
