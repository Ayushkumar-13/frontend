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
        squares: [],
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
 pauseGame: () => {
  set(state => ({...state, isPause:!state.isPause}))
 },
 ContinueGame: () => {},
 togglePencilMode: () => {
    set(state => ({...state, pencilMode: !state.pencilMode}))
 },
 changeQBoard: (num) => {
    set(state => {
     if (state.isPause) return state;

        const row = state.selectedCell.row
        const col = state.selectedCell.col
        if (row == null || col == null) return state;

        if (state.qBoard[row][col].default) return state
        const qBoard = state.qBoard
        let mistake = state.mistake
        let isComplete = state.isComplete
        if (state.pencilMode){
            qBoard[row][col] = {...qBoard[row][col], pencilValue:num}

        } else {
            qBoard[row][col] = {...qBoard[row][col], value:num}
            if (qBoard[row][col].value != state.board[row][col])
                mistake++;
            if (mistake >= state.totalMistakes)
                isComplete = true
        }
        return {...state, qBoard, mistake, isComplete}
    })
 },
 resetQBoard: () => {},
quitGame: () => {
    set({isStart: false})
  },

 setSelectedCell: (row,col) => {
    const iRow = Math.floor(row/3) * 3
    const iCol = Math.floor(col/3) * 3
    const squares = []
    for (let x=iRow; x<iRow+3; x++){
        for (let y=iCol; y<iCol+3; y++){
            squares.push([x,y])
        }
    }
 set({selectedCell: {row,col,squares}})
 },

 useHint: () => {},
 increaseTime: () => {
    set(state=> ({...state, time: state.time+1}))
 },
 setState: () => {},
})
export const useGame = create(gameState)