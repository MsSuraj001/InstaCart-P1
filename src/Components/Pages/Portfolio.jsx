import React from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <>
    {/* // this is the main div */}
        <div className='py-5 px-2'>
            <h1 className='text-center text-[3rem] font-bold underline'>PORTFOLIO</h1>
        </div>


        {/* this is the all type div */}
        <div className='text-center font-bold gap-5 flex items-center justify-center pb-5'>
            <div><Link to={'#'} element={"jdsk"}>All</Link></div>
            <div><Link to={'#'}>VIDIO EDITING</Link></div>
            <div><Link to={'#'}>THOMBLE</Link></div>
        </div>
    </>
  )
}

export default Portfolio
