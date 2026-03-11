const sidebar = document.querySelector(".sidebar");
const boardSizer = sidebar.querySelector("#board-sizer");
const boardSizeDisplay = sidebar.querySelector("#board-size-display");

export function onBoardSizerChange(callback) {
  boardSizer.addEventListener("input", callback);
}

export function setBoardSizeDisplay() {
  boardSizeDisplay.textContent = `${boardSizer.value} x ${boardSizer.value}`;
}

function getBoardSize() {
  return boardSizer.value;
}
