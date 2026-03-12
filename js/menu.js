const sidebar = document.querySelector(".sidebar");
const boardSizer = sidebar.querySelector("#board-sizer");
const boardSizeDisplay = sidebar.querySelector("#board-size-display");
const brushColorPick = sidebar.querySelector("#brush-color");
const quickColContainer = sidebar.querySelector("#quick-col-container");
const rainbowBtn = sidebar.querySelector("#rainbow-btn");

export function onBoardSizerChange(callback) {
  boardSizer.addEventListener("input", callback);
}

export function onColorChange(callback) {
  brushColorPick.addEventListener("input", callback);
}

export function onQuickColSel(callback) {
  quickColContainer.addEventListener("click", callback);
}

export function onRainbowMode(callback) {
  rainbowBtn.addEventListener("click", callback);
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
