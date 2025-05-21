import React from 'react'

function Home() {
  return (
    <>
    <span id='heading' className='text-3xl font-bold'>Sudoku Game</span>
  <div className="flex flex-col gap-5 items-center justify-center">
        <button className="option bg-slate-900 p-3 rounded-md hover:bg-slate-800  active:scale-90" >
          Start New
        </button>
        <button className="option bg-slate-900 p-3 rounded-md hover:bg-slate-800  active:scale-90" >
          Continue
        </button>
        <div className='flex items-center gap-5'>
            <label htmlFor="modes">Difficulty:</label>
            <select  id="mode" className='bg-slate-900 p-5 rounded-lg' defaultValue={"easy"}>
                <option value="veryEasy">Very Easy</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                <option value="extreme">Extreme</option>
            </select>
        </div>
</div>
    </>
  )
}

export default Home
