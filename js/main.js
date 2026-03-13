import {
  onBoardSizerChange,
  onColorChange,
  onQuickColSel,
  onRainbowMode,
  setBoardSizeDisplay,
  getBoardSize,
  getBrushColor,
  setBrushColor,
  onEraserMode,
  onClearMode,
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

onRainbowMode(() => initializeBrush("rainbow"));

onEraserMode(() => initializeBrush("#fff"));

onClearMode(() => {
  if (confirm("Do you reall want to clear the board?")) {
    removeBoard();
    createBoard(boardSideSize, blockSideSize);
  }
});
