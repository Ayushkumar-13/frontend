import React from 'react'
import Square from './Square'
function Board() {
    const squares = Array(3).fill(Array(3).fill(null))
    const numbers = Array(9).fill(null)
    const pause = false;
    const over = false
    return (
        <div className='flex w-screen h-[50vh] md:w-[600px] md:h-[600px] p-2 flex-col gap-2 relative '>
            {
                pause && <span className='text-6xl text-center w-full bg-slate-700 border z-10 shadow-lg border-black p-10 rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Pause</span>
            }
            {
                over && <div className='text-2xl w-full bg-slate-700 border z-10 shadow-lg border-black p-10 rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <span>All Mistake Used</span>
                    <div className='flex items-center p-5 justify-around'>
                        <button className="option bg-slate-900 p-3 rounded-md hover:bg-slate-800  active:scale-90" >
                            Try Again
                        </button>
                        <button className="option bg-slate-900 p-3 rounded-md hover:bg-slate-800  active:scale-90" >
                            Start New
                        </button>
                    </div>
                </div>
            }
            {squares.map((arr, row) => (
                <div key={row} className='flex gap-2 w-full h-full'>
                    {arr.map((_, col) => (

                        <Square key={col} row={row} col={col} />
                    ))}

                </div>

            ))}
            {/*  to show numbers div 1-9 boxes  */}
            <div className='flex justify-around select-none w-full'>
                {
                    numbers.map((_, i) => (
                        <span key={i} className="text-slate-200 bg-neutral-900 shadow-lg rounded-md p-2 md:px-3 my-5 text-2xl cursor-pointer outline-none hover:outline hover:outline-1 ">
                            {i + 1}
                        </span>


                    ))
                }
            </div>
        </div>

    )
}

export default Board
