import React from 'react'
import { useGame } from '../../store/gameStore'
import Board from './Board'

function Cell({ row, col }) {
  const { qBoard, setSelectedCell, selectedCell,board } = useGame()

  function handleClick() {
    setSelectedCell(row, col)
  }

  function isSelected() {
    const query = { current: false, other: false }
    if (selectedCell.row == row && selectedCell.col == col) query.current = true
    if (selectedCell.row == row || selectedCell.col == col) query.other = true
    if ( qBoard[row][col].value != 0 && qBoard[row][col].value == qBoard[selectedCell.row][selectedCell.col].value) query.other = true
    return query
  }

  return (
   <div
  onClick={handleClick}
  className={`Cell select-none flex items-center justify-center cursor-pointer w-full h-full rounded-md 
    ${isSelected().current 
      ? "bg-slate-950 outline outline-1 outline-blue-500" 
      : "bg-slate-800 hover:outline hover:outline-1 hover:outline-white"}
      ${isSelected().other
      ? "bg-slate-900 " 
      : "bg-slate-800 hover:outline hover:outline-1 hover:outline-white"}`}
>
  {qBoard[row][col].value !== 0 && (
    <span
      className={`text-2xl md:text-3xl ${
        qBoard[row][col].default ? "text-gray-400" : qBoard[row][col].value == board[row][col] ? "text-blue-500" : "text-red-500"
      }`}
    >
      {qBoard[row][col].value}
    </span>
  )}
</div>


  )
}

export default Cell
