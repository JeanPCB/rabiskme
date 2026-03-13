const sidebar = document.querySelector(".sidebar");
const boardSizer = sidebar.querySelector("#board-sizer");
const boardSizeDisplay = sidebar.querySelector("#board-size-display");
const brushColorPick = sidebar.querySelector("#brush-color");
const quickColContainer = sidebar.querySelector("#quick-col-container");
const rainbowBtn = sidebar.querySelector("#rainbow-btn");
const eraseBtn = sidebar.querySelector("#eraser-btn");
const clearBtn = sidebar.querySelector("#clear-btn");
let hasInteractSlider = false;

export function onBoardSizerChange(callback) {
  boardSizer.addEventListener("mousedown", (e) => {
    if (!hasInteractSlider) {
      e.preventDefault();
      alert("Resizing gonna clear the board!!!");
      hasInteractSlider = true;
    }
  });

  boardSizer.addEventListener("input", callback);
}

export function onColorChange(callback) {
  brushColorPick.addEventListener("change", callback);
  brushColorPick.addEventListener("click", callback);
}

export function onQuickColSel(callback) {
  quickColContainer.addEventListener("click", callback);
}

export function onRainbowMode(callback) {
  rainbowBtn.addEventListener("click", callback);
}

export function onEraserMode(callback) {
  eraseBtn.addEventListener("click", callback);
}

export function onClearMode(callback) {
  clearBtn.addEventListener("click", callback);
}

export function setBoardSizeDisplay() {
  boardSizeDisplay.textContent = `${boardSizer.value} x ${boardSizer.value}`;
}

export function getBoardSize() {
  return Number(boardSizer.value);
}

export function getBrushColor() {
  return brushColorPick.value;
}

export function setBrushColor(color) {
  brushColorPick.value = color;
}
