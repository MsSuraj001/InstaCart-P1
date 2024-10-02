import React from 'react'
import IconHome_svg from '../All_SVG/HomeSVG'
import IconSunMoon from '../All_SVG/MoonSVG'

function Navbar() {
  return (
    <nav className='h-[13vh] w-full bg-slate-200 flex justify-between items-center md:px-20 px-7 shadow-lg'>
      <div>
        <h1 className='text-3xl font-bold text-blue-500'>InstaCart</h1>
      </div>

      <div>
        <IconSunMoon className="text-4xl"/>
      </div>
    </nav>
  )
}

export default Navbar
