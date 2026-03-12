import {
  onBoardSizerChange,
  onColorChange,
  onQuickColSel,
  rainbowMode,
  setBoardSizeDisplay,
  getBoardSize,
  getBrushColor,
  setBrushColor,
} from "./menu.js";

import {
  getBlockSideSize,
  createBoard,
  removeBoard,
  initializeBrush,
} from "./drawBoard.js";

let boardSideSize = getBoardSize();
let blockSideSize = getBlockSideSize(boardSideSize);
let lastBrushColor = getBrushColor();

createBoard(boardSideSize, blockSideSize);
setBoardSizeDisplay();
initializeBrush(lastBrushColor);

onColorChange(() => {
  lastBrushColor = getBrushColor();
  initializeBrush(lastBrushColor);
});

onBoardSizerChange(() => {
  removeBoard();
  boardSideSize = getBoardSize();
  blockSideSize = getBlockSideSize(boardSideSize);

  createBoard(boardSideSize, blockSideSize);
  setBoardSizeDisplay();
});

onQuickColSel((e) => {
  const el = e.target;
  const elColor = el.style.backgroundColor;

  if (el.classList.contains("quick-color")) {
    setBrushColor(elColor);
    initializeBrush(elColor);
  }
});

rainbowMode((isActive) => {
  if (isActive) {
    initializeBrush("rainbow");
  } else {
    initializeBrush(lastBrushColor);
  }
});
