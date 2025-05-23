import React from 'react'

function Cell({row,col}) {
    
  return (
    <div onClick={()=> console.log(row,col)} className='Cell select-none flex items-center justify-center cursor-pointer bg-slate-800 w-full h-full rounded-md hover:outline hover:outline-[1px]'>

    </div>
  )
}

export default Cell
