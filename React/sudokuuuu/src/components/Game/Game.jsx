import React, { useEffect } from 'react'
import { Edit, LogOut, Pause, PencilLine, Lightbulb } from 'lucide-react'
import Board from '../Board/Board'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../../store/gameStore'

function Game() {
  const navigate = useNavigate()
  const {isStart} = useGame()
  useEffect(() => {
      if (!isStart){
        navigate('/')
      }
  },[])
  return (
    <div className='flex flex-col items-center justify-center'>
       
      <Board/>
      <div className='flex items-center w-full justify-around'>
         <button className="option bg-slate-900 p-3 rounded-md hover:bg-slate-800  active:scale-90" >
          <LogOut/>
        </button>
         <button className="option bg-slate-900 p-3 rounded-md hover:bg-slate-800  active:scale-90" >
          <Pause/>
        </button>
         <button className="option bg-slate-900 p-3 rounded-md hover:bg-slate-800  active:scale-90" >
          Reset
        </button>
         <button className="option bg-slate-900 p-3 rounded-md hover:bg-slate-800  active:scale-90" >
          <PencilLine/>
        </button>
         <button className="option bg-slate-900 p-3 rounded-md hover:bg-slate-800  active:scale-90" >
           <Lightbulb/>
        </button>
      </div>
    </div>
  )
}

export default Game
