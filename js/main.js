import {
  onBoardSizerChange,
  setBoardSizeDisplay,
  getBoardSize,
} from "./menu.js";

import {
  getBlockWidth,
  getBlockHeight,
  createBoard,
  removeBoard,
} from "./drawBoard.js";

let boardSize = 16;
let blockWidth = getBlockWidth(boardSize);
let blockHeight = getBlockHeight(boardSize);
createBoard(boardSize, blockWidth, blockHeight);
setBoardSizeDisplay();

onBoardSizerChange(() => {
  removeBoard(boardSize);
  boardSize = getBoardSize();
  blockWidth = getBlockWidth(boardSize);
  blockHeight = getBlockHeight(boardSize);

  createBoard(boardSize, blockWidth, blockHeight);
  setBoardSizeDisplay();
});
