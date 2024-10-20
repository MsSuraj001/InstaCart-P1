import React from 'react'
import IconInstagram from '../All_SVG/InstaSVG'
import IconLinkedin from '../All_SVG/LinkedinSVG'
import IconTwitter from '../All_SVG/TwitterSVG'
import Service from './Service'
import Layout from '../Layout/Layout'
import Spline from '@splinetool/react-spline';
import Portfolio from './Portfolio'
import SErviceA from './ServiceA'
import Pf from '../All_SVG/P-Pic_New.png'

function Home() {
  return (
    <Layout>
    <div className='w-full flex flex-col md:flex-row bg-[#222831] text-white'>
        {/* this is the left section */}
      <div className='h-full md:[h-50%] w-full md:w-[50%] px-10 md:py-24 md:px-24'>
            <div className='text-start'>
                <span className='font-bold tracking-widest'>HELLO WORLD,  </span><span className='font-bold text-blue-600 tracking-wide'>WE ARE</span>
            </div>
            <div>
                <h1 className=' font-bold text-[4rem] tracking-[.25rem] text-[#76ABAE]'>MarkitUp</h1>
            </div>
            <div>
                <span className='font-semibold text-[.70rem] mr-2'>A</span>
                <span className='font-thin text-[1.5rem]'>Content Marketing Agency</span>
            </div>

            <div className=' md:block py-6'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing quas aliquid ipsum distinctio quisquam. Sunt dolorum ullam repudiandae.</p>

                <div className='py-5 text-2xl flex gap-2'>
                    <IconInstagram/>
                    <IconLinkedin/>
                    <IconTwitter/>
                </div>

                {/* this is the contact button */}
                <div className='py-5'>
                    <button className='py-3 px-6 rounded-full border-2 shadow-md '>CONTACT US</button>
                </div>
            </div>
      </div>


        {/* this is the right section */}
      <div>
        {/* <h1>this is the right section</h1> */}
        <img src={Pf} alt=""  className='h-[30rem] w-[100%] items-center mt-12 border-b-2'/>
        
      </div>

    </div>
      <Service/>
      <Portfolio/>
    </Layout>
  )
}

export default Home
