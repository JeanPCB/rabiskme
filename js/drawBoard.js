const boardWrapper = document.querySelector("#board-wrapper");

export function initializeBrush(color) {
  let isMouseDown = false;

  document.addEventListener("mousedown", () => (isMouseDown = true));
  document.addEventListener("mouseup", () => (isMouseDown = false));

  boardWrapper.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    e.preventDefault();
    if (e.target.classList.contains("block")) {
      paintBlock(e.target, color);
    }
  });

  boardWrapper.addEventListener("mousemove", (e) => {
    if (isMouseDown && e.target.classList.contains("block")) {
      paintBlock(e.target, color);
    }
  });
}

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

function paintBlock(block, color) {
  if (color === "rainbow") {
    const rainbowColors = [
      "#ff4f60",
      "#ffa43b",
      "#ffff63",
      "#35ff61",
      "#209fff",
      "#ec69fb",
    ];

    const randColor =
      rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
    block.style.backgroundColor = randColor;
  } else {
    block.style.backgroundColor = color;
  }
}
