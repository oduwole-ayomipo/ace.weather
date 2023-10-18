import React from 'react'
import acelogo from '../assets/logo.png'

function Logo() {
  return (
    <div className='flex relative bg-custom-secondary items-center justify-center opacity-80 md:justify-start md:flex-col md: pt-5'>
        <img 
            className='Ace-logo w-12 h-12'
            src={acelogo} 
            alt="ace.weather logo" />
        <h4 className='logo-text font-normal font-Coiny text-custom-white px-3 py-5 uppercase text-lg'>
            ace.weather
        </h4>
    </div>
  )
}

export default Logo