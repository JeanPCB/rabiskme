import {
  onBoardSizerChange,
  setBoardSizeDisplay,
  getBoardSize,
} from "./menu.js";

import { getBlockSideSize, createBoard, removeBoard } from "./drawBoard.js";

let boardSideSize = 16;
let blockSideSize = getBlockSideSize(boardSideSize);
createBoard(boardSideSize, blockSideSize);
setBoardSizeDisplay();

onBoardSizerChange(() => {
  removeBoard(boardSideSize);
  boardSideSize = getBoardSize();
  blockSideSize = getBlockSideSize(boardSideSize);

  createBoard(boardSideSize, blockSideSize);
  setBoardSizeDisplay();
});
