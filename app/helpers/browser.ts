export function getScrollPosition(): {x: number; y: number} {
  return {
    x: window.pageXOffset || window.document.documentElement.scrollLeft,
    y: window.pageYOffset || window.document.documentElement.scrollTop
  };
};

export function getElementPosition(elm: HTMLElement): {x: number; y: number} {
  let y = elm.offsetTop;
  let x = elm.offsetLeft;
  let node: HTMLElement = elm;
  while (node.offsetParent && node.offsetParent !== document.body) {
    if (node.offsetParent instanceof HTMLElement) {
      node = node.offsetParent;
      y += node.offsetTop;
      x += node.offsetLeft;
    } else {
      throw new Error(
        `Wront parent node type, it should only be HTMLElement: ${
          node.offsetParent
        }`
      );
    }
  }
  return { x, y };
}
