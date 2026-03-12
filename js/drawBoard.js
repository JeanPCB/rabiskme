const boardWrapper = document.querySelector("#board-wrapper");

export function getBlockSideSize(boardSideSize) {
  return 100 / boardSideSize;
}

export function createBoard(numBlocks, blockSideSize) {
  const boardFragment = document.createDocumentFragment();

  for (let i = 0; i < numBlocks * numBlocks; i++) {
    const block = createBlock(blockSideSize);
    addNewBlock(boardFragment, block);
  }

  boardWrapper.appendChild(boardFragment);
}

export function removeBoard() {
  boardWrapper.innerHTML = "";
}

export function createBlock(blockSideSize) {
  const block = document.createElement("div");
  block.style.width = `${blockSideSize}%`;
  block.style.height = `${blockSideSize}%`;
  block.className = "block";
  return block;
}

export function addNewBlock(parent, block) {
  parent.appendChild(block);
}
