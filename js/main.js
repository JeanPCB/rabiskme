import {
  onBoardSizerChange,
  setBoardSizeDisplay,
  getBoardSize,
} from "./menu.js";

import {
  getBlockWidth,
  getBlockHeight,
  createBlock,
  createBoard,
} from "./drawBoard.js";

onBoardSizerChange(() => {
  const boardSize = getBoardSize();
  const blockWidth = getBlockWidth(boardSize);
  const blockHeight = getBlockHeight(boardSize);

  createBoard(boardSize, blockWidth, blockHeight);
  setBoardSizeDisplay();
});
