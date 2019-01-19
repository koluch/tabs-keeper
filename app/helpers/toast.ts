const containerEl = document.createElement("div");
containerEl.setAttribute(
  "style",
  `
  position: fixed;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  max-width: 50%;
  align-items: center;
  bottom: 0;
`
);
document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(containerEl);
});

const colors = {
  SUCCESS: ["#dfffc6", "#5bba11", "#3c8901"],
  ERROR: ["#ffdede", "#f60000", "#a50000"],
  WARNING: ["#fee9a2", "#ffc500", "#b78d00"]
};

export default function(
  message: string,
  type: "SUCCESS" | "ERROR" | "WARNING" = "SUCCESS"
) {
  let preventClosing = false;

  const rootEl = document.createElement("div");
  rootEl.setAttribute(
    "style",
    `
    background: ${colors[type][0]};
    display: flex;
    box-shadow: 0px 1px 6px 1px #0006;
    border-radius: 5px;
    align-items: stretch;
    margin-bottom: 12px;
    min-width: 200px;
    transform: scale(0.75);
    opacity: 0;
    transition: transform 200ms, opacity 300ms;
  `
  );
  rootEl.addEventListener("mouseenter", () => {
    preventClosing = true;
  });
  rootEl.addEventListener("mouseleave", () => {
    preventClosing = false;
  });

  const titleEl = document.createElement("div");
  titleEl.setAttribute(
    "style",
    `
    padding: 4px 12px;
    flex: 1;
  `
  );
  titleEl.textContent = message;
  rootEl.appendChild(titleEl);

  const buttonEl = document.createElement("button");
  buttonEl.setAttribute(
    "style",
    `
    border: none;
    background: ${colors[type][1]};
    border-radius: 0 5px 5px 0;
    color: ${colors[type][2]};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: center;
    cursor: pointer;
    font-size: 23px;
  `
  );
  buttonEl.textContent = "\u2716";
  rootEl.appendChild(buttonEl);

  const onClose = () => {
    rootEl.style.opacity = "0";
    setTimeout(() => {
      containerEl.removeChild(rootEl);
    }, 300);
  };
  buttonEl.addEventListener("click", onClose);

  containerEl.appendChild(rootEl);
  setTimeout(() => {
    rootEl.style.transform = null;
    rootEl.style.opacity = "1";
  }, 30);
  setTimeout(() => {
    if (preventClosing) {
      rootEl.addEventListener("mouseleave", onClose);
    } else {
      onClose();
    }
  }, 3000);
}
