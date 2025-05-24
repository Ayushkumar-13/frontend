import { create } from "zustand";
import { MODES, sudoku } from "./sudokuUtils";
const initialState = {
    isStart: false,
    isPause: false,
    isComplete: false,
    pencilMode: false,
    mistake: 0,
    hints:0,
    totalMistakes: 5,
    time: 0,
    mode: MODES["easy"],
    board: Array.from({ length: 9 }, () => Array(9).fill(0)),
    qBoard: Array.from({ length: 9 }, () => Array(9).fill(0)),
    selectedCell: {
        row: null,
        col: null,
        squares: null,
    },
};
const gameState = (set) => ({
    ...initialState,
 startGame: (mode) => {
    const data = sudoku(mode);
    set({
      ...initialState,
      board: data.solvedBoard,
      qBoard: data.unSolvedBoard,
      isStart: true,
      hints: MODES[mode].hints,
      totalMistakes: MODES[mode].mistakes,
      mode: MODES[mode],
    });
  },
 tryAgain: () => {},
 pauseGame: () => {},
 ContinueGame: () => {},
 togglePencilMode: () => {},
 changeQBoard: () => {},
 resetQBoard: () => {},
 quitGame: () => {},

 setSelectedCell: (row,col) => {
 set({selectedCell: {row,col}})
 },
 
 useHint: () => {},
 increaseTime: () => {},
 setState: () => {},
})
export const useGame = create(gameState)