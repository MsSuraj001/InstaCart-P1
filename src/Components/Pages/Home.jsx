import React from 'react'
import IconInstagram from '../All_SVG/InstaSVG'
import IconLinkedin from '../All_SVG/LinkedinSVG'
import IconTwitter from '../All_SVG/TwitterSVG'
import Service from './Service'
import Layout from '../Layout/Layout'

function Home() {
  return (
    <Layout>
    <div className='w-full flex flex-col md:flex-row'>
        {/* this is the left section */}
      <div className='h-full md:[h-50%] w-full md:w-[50%] px-10 py-24 md:px-24'>
            <div className='text-start'>
                <span className='font-bold tracking-widest'>HELLO WORLD,  </span><span className='font-bold text-blue-600 tracking-wide'>WE ARE</span>
            </div>
            <div>
                <h1 className=' font-bold text-[4rem] tracking-[.25rem] text-cyan-700'>MarkitUp</h1>
            </div>
            <div>
                <span className='font-semibold text-[.70rem] mr-2'>A</span>
                <span className='font-thin text-[1.5rem]'>Content Marketing Agency</span>
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

      <Service/>
    </div>
    </Layout>
  )
}

export default Home
