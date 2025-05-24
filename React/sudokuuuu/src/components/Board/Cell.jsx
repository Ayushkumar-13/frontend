import React from 'react'
import { useGame } from '../../store/gameStore'

function Cell({ row, col }) {
  const { qBoard, setSelectedCell, selectedCell } = useGame()

  function handleClick() {
    setSelectedCell(row, col)
  }

  function isSelected() {
    const query = { current: false, other: false }
    if (selectedCell.row == row && selectedCell.col == col) query.current = true
    return query
  }

  return (
    <div
      onClick={handleClick}
      className={`Cell select-none flex items-center justify-center cursor-pointer bg-slate-800 w-full h-full rounded-md 
    ${isSelected().current ? "outline outline-1 outline-blue-500 bg-neutral-900" : "hover:outline hover:outline-1 hover:outline-white"}`}
    >
      {qBoard[row][col].value !== 0 && (
        <span
          className={`text-2xl md:text-3xl ${qBoard[row][col].default ? "text-gray-400" : "text-blue-500"
            }`}
        >
          {qBoard[row][col].value}
        </span>
      )}
    </div>

  )
}

export default Cell
