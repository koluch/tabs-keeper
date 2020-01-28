browser.runtime.onInstalled.addListener(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    function setIcon(isDark) {
        browser.browserAction.setIcon({
            path: isDark ? "/icons/icon-dark.svg" : "/icons/icon-light.svg"
        });
    }
    mediaQueryList.addEventListener("change", e => {
        setIcon(e.matches);
    });
    setIcon(true);
});
