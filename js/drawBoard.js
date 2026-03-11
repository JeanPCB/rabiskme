const boardWrapper = document.querySelector("#board-wrapper");

export function getBlockWidth(boardSize) {
  return boardWrapper.offsetWidth / boardSize;
}

export function getBlockHeight(boardSize) {
  return boardWrapper.offsetHeight / boardSize;
}

export function createBlock(width, height) {
  const block = document.createElement("div");
  block.offSetWidth = width;
  block.offsetHeight = height;
  return block;
}
