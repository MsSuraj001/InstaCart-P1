import React from 'react'
import IconHome_svg from '../All_SVG/HomeSVG'
import IconSunMoon from '../All_SVG/MoonSVG'

function Navbar() {
  return (
    <nav className='h-[11vh] w-full bg-[#31363F] flex justify-between items-center md:px-20 px-7'>
      <div>
        <h1 className='text-3xl font-bold text-white'>InstaCart</h1>
      </div>

      <div>
        <IconSunMoon className="text-4xl text-white"/>
      </div>
    </nav>
  )
}

export default Navbar
