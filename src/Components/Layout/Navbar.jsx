import React from 'react'
import IconHome_svg from '../All_SVG/HomeSVG'
import IconSunMoon from '../All_SVG/MoonSVG'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='h-[11vh] w-full bg-[#31363F] flex justify-between items-center md:px-20 px-7'>
      <div>
        <h1 className='text-3xl font-bold text-white'>InstaCart</h1>
      </div>

      <div className='flex gap-3 justify-center items-center text-white'>
        <Link>HOME</Link>
        <Link>ABOUT</Link>
        <Link>CONTACT</Link>
        <Link>SERVICE</Link>
        <IconSunMoon className="text-2xl text-white"/>
      </div>
    </nav>
  )
}

export default Navbar
