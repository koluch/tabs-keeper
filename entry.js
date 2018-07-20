/* Helpers */
function clear(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

function h(...a) {
  if (a.length < 1) {
    throw new Error('Function should be called with at least 1 argument');
  }

  const tag = a[0];
  const attrs = a.length > 1 ? a[1] : {};
  const children = a.length > 2 ? a[2] : null;

  const result = document.createElement(tag);
  Object.entries(attrs).map(([name, value]) => {
    if (name.toLowerCase() === 'onclick') {
      result.addEventListener('click', value)
    } else {
      result.setAttribute(name, value);
    }
  });
  if (typeof children === 'string') {
    result.textContent = children;
  } else if (Array.isArray(children)) {
    children.forEach((child) => {
      result.appendChild(child)
    });
  } else if (children !== null) {
    result.appendChild(children)
  }
  return result;
}

/* Application logic */
function makeTabEl(tab) {
  const handleClickTab = () => {
    browser.tabs.update(tab.id, {active: true});
  };
  const handleClickClose = (e) => {
    e.stopPropagation();
    browser.tabs.remove(tab.id).then(() => {
      redrawTabs();
    });
  };

  return h('div', {class: `tab ${tab.active ? 'isActive' : ''}`, 'data-id': tab.id, onClick: handleClickTab}, [
    h('img', {class: 'tavFavIcon', src: tab.favIconUrl}),
    h('div', {class: 'tabTitle'}, tab.title),
    h('img', {src: './close.svg', 'data-id': tab.id, class: 'tabCloseIcon', onClick: handleClickClose}),
  ])
}

const redrawTabs = (() => {
  const tabsEl = document.querySelector('#tabs');
  const tabsCountEl = document.querySelector('#tabs-count');
  return () => {
    browser.windows.getCurrent({ populate: true }).then((window) => {
      clear(tabsEl);
      console.log("window.tabs", window.tabs)
      tabsCountEl.textContent = window.tabs.length;
      window.tabs.forEach((tab) => {
        tabsEl.appendChild(makeTabEl(tab));
      });
    });
  }
})();
redrawTabs();
