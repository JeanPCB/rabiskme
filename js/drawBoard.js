const boardWrapper = document.querySelector("#board-wrapper");

export function getBlockWidth(boardSize) {
  return boardWrapper.offSetWidth / boardSize;
}

export function getBlockHeight(boardSize) {
  return boardWrapper.offSetHeight / boardSize;
}

export function createBlock(width, height) {
  const block = document.createElement("div");
  block.offSetWidth = width;
  block.offsetHeight = height;
  return block;
}
