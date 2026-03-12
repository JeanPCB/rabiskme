import {
  onBoardSizerChange,
  onColorChange,
  setBoardSizeDisplay,
  getBoardSize,
  getBrushColor,
} from "./menu.js";

import {
  getBlockSideSize,
  createBoard,
  removeBoard,
  initializeBrush,
} from "./drawBoard.js";

let boardSideSize = getBoardSize();
let blockSideSize = getBlockSideSize(boardSideSize);

createBoard(boardSideSize, blockSideSize);
setBoardSizeDisplay();
initializeBrush(getBrushColor());

onColorChange(() => initializeBrush(getBrushColor()));

onBoardSizerChange(() => {
  removeBoard();
  boardSideSize = getBoardSize();
  blockSideSize = getBlockSideSize(boardSideSize);

  createBoard(boardSideSize, blockSideSize);
  setBoardSizeDisplay();
});
