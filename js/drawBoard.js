const boardWrapper = document.querySelector("#board-wrapper");

export function getBlockSideSize(boardSideSize) {
  return 100 / boardSideSize;
}

export function createBoard(numBlocks, width, height) {
  for (let i = 0; i < numBlocks * numBlocks; i++) {
    const block = createBlock(width, height);
    addNewBlock(block);
  }
}

export function removeBoard(numBlocks) {
  for (let i = 0; i < numBlocks * numBlocks; i++) {
    boardWrapper.lastChild.remove();
  }
}

export function createBlock(width, height) {
  const block = document.createElement("div");
  block.style.width = `${width}%`;
  block.style.height = `${height}%`;
  block.className = "block";
  return block;
}

export function addNewBlock(block) {
  boardWrapper.appendChild(block);
}
