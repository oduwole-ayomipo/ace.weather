import React from 'react'
import Card from './Card'

function Main() {
  return (
    <div className='flex flex-col justify-start bg-custom-primary p-3 min-[520px]:px-9'>
        <div className='card-top-data py-3'>
            <h4 className='font-Coiny text-[15px] uppercase'>06:09 - Monday, 9 Sep '23</h4>
            <h3 className='font-Comfortaa text-[11px] font-semibold'>Raining</h3>
        </div>
        <div className='weather-image'>
            <img className='h-28' />
        </div>
        <div className='main-weather-data flex items-center'>
            <div className='font-Coiny flex text-[70px] leading-[70px]'>
                <h4>16 </h4>
                <div className='degrees pt-3 text-[30px] leading-[20px] h-full'>°</div>

            </div>
            <div className='card-top-data px-2 flex flex-col'>
                <h4 className='font-Coiny text-2xl leading-[23px] tracking-tighter'>London</h4>
                <h3 className='font-Comfortaa text-[10px]'>Temp: 18.71 | Wind: 4.31 m/s | Humidity: 76%</h3>
            </div>
        </div>
        <div>
            <hr className='text-custom-white h-3' />
        </div>
        <div>
            <div  className='font-Coiny text-sm py-2'>
                <h3>6-Day Forecast</h3>
            </div>
            <Card />
        </div>
        
    </div>
  )
}

export default Main