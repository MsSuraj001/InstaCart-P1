import React from 'react'
import IconInstagram from '../All_SVG/InstaSVG'
import IconBxlWhatsapp from '../All_SVG/WhatsappSVG'
import IconUpwork from '../All_SVG/UpworkSVG'
import IconFacebook from '../All_SVG/FaceBookSVG'

function Footer() {
  return (
    <footer className='h-[13vh] w-full flex md:justify-between justify-center items-center md:px-20 px-7 bg-slate-300'>
        <div className='hidden md:block'>
            <p>Copyright 2020 some text for your choice</p>
        </div>

        <div className='flex gap-2'>
            <a href=""><IconInstagram className="md:text-3xl text-2xl"/></a>
            <IconBxlWhatsapp className="md:text-3xl text-2xl"/>
            <IconFacebook className="md:text-3xl text-2xl"/>
            <IconUpwork className="md:text-3xl text-2xl"/>
        </div>
    </footer>
  )
}

export default Footer
