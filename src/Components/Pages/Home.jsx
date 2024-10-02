import React from 'react'
import IconInstagram from '../All_SVG/InstaSVG'
import IconLinkedin from '../All_SVG/LinkedinSVG'
import IconTwitter from '../All_SVG/TwitterSVG'

function Home() {
  return (
    <div className=' w-full flex flex-col md:flex-row'>
        {/* this is the left section */}
      <div className='h-full md:[h-50%] w-full md:w-[50%] border-2 px-16 py-24'>
            <div className='text-start'>
                <span className='font-bold tracking-widest'>HELLO WORLD,  </span><span className='font-bold text-blue-600 tracking-wide'>WE ARE</span>
            </div>
            <div>
                <h1 className='font-bold text-[5rem] tracking-[.25rem] text-cyan-700'>MarkitUP</h1>
            </div>
            <div>
                <span className='font-semibold text-[.70rem] mr-4'>A</span>
                <span className='font-thin text-[1.7rem]'>Content Marketing Agency</span>
            </div>

            <div className='hidden md:block py-6'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing quas aliquid ipsum distinctio quisquam. Sunt dolorum ullam repudiandae.</p>

                <div className='py-5 text-2xl flex gap-2'>
                    <IconInstagram/>
                    <IconLinkedin/>
                    <IconTwitter/>

                   
                </div>

                {/* this is the contact button */}
                <div className='py-5'>
                    <button className='py-3 px-6 rounded-full border-2 shadow-md'>CONTACT US</button>
                </div>
            </div>
      </div>


        {/* this is the right section */}
      <div>
        <h1>this is the right section</h1>
      </div>
    </div>
  )
}

export default Home
