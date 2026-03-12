const sidebar = document.querySelector(".sidebar");
const boardSizer = sidebar.querySelector("#board-sizer");
const boardSizeDisplay = sidebar.querySelector("#board-size-display");
const brushColorPick = sidebar.querySelector("#brush-color");

export function onBoardSizerChange(callback) {
  boardSizer.addEventListener("input", callback);
}

export function onColorChange(callback) {
  brushColorPick.addEventListener("input", callback);
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
