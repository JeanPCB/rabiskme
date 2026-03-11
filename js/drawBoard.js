const boardWrapper = document.querySelector("#board-wrapper");

export function getBlockWidth(boardSize) {
  return boardWrapper.offsetWidth / boardSize;
}

export function getBlockHeight(boardSize) {
  return boardWrapper.offsetHeight / boardSize;
}

export function createBlock(width, height) {
  const block = document.createElement("div");
  block.style.width = `${width}px`;
  block.style.height = `${height}px`;
  block.className = "block";
  return block;
}

export function addNewBlock(block) {
  boardWrapper.appendChild(block);
}
