import React from 'react'
import Cell from './Cell'

function Square({ row, col }) {
    const squares = Array(3).fill(Array(3).fill(null))
    return (
        <div className='box w-full h-full gap-1 flex flex-col'>
           {squares.map((arr,i) => (
                  <div className='flex gap-1 w-full h-full'>
                   {arr.map((_,k) => (
           
                       <Cell row={row} col={col}/>
                   ))}
           
                  </div> 
           
                   ))}
        </div>
    )
}

export default Square
