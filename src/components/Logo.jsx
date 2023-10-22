import React from 'react'
import acelogo from '../assets/logo1.png'

function Logo() {
  return (
    <div className='flex relative  backdrop-blur-[40px] bg-gradient-to-br from-custom-purple to-[#f9f9f910] items-center justify-center p-2 shadow-custom-orange md:shadow-lg md:justify-start md:flex-col md:pt-14'>
        <img 
            className='Ace-logo w-14 h-14'
            src={acelogo} 
            alt="ace.weather logo" />
        <h4 className='logo-text font-normal font-Coiny text-custom-secondary m-3 md:mx-8 uppercase text-lg'>
            ace.weather
        </h4>
    </div>
  )
}

export default Logo