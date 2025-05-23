import React from 'react'
import Square from './Square'
function Board() {
     const squares = Array(3).fill(Array(3).fill(null))
  return (
    <div className='flex w-screen h-[50vh] md:w-[600px] md:h-[600px] p-2 flex-col gap-2 relative '>
       <div className='flex gap-2 w-full h-full'>
            <Square/>
            <Square/>
            <Square/>
            
       </div>
       <div className='flex gap-2 w-full h-full'>
            <Square/>
            <Square/>
            <Square/>
            
       </div>
       <div className='flex gap-2 w-full h-full'>
            <Square/>
            <Square/>
            <Square/>
            
       </div>
       
    </div>
    
  )
}

export default Board
