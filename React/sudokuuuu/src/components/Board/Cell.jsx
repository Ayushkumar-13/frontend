import React from 'react'
import { useGame } from '../../store/gameStore'

function Cell({ row, col }) {
 const {qBoard} = useGame()
  return (
    <div className='Cell select-none flex items-center justify-center cursor-pointer bg-slate-800 w-full h-full rounded-md hover:outline hover:outline-[1px]'>
      { qBoard[row][col].value !=0 && <span className='text-2xl md:text-3xl'> {qBoard[row][col].value} </span>}
    </div>
  )
}

export default Cell
