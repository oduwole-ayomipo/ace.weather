import React from 'react'

function Card({ backgroundColor, 
                textColor, 
                flexDirection}) {
  return (
    <div className={`card-container flex flex-col gap-16 w-full  bg-${backgroundColor} text-${textColor} p-4 my-3 cursor-pointer rounded-xl drop-shadow-lg  md:gap-20`}>
        <div className='card-top-data'>
            <h4 className='font-Coiny text-sm md:text-xs'>TUESDAY, 11 Sep '23</h4>
            <h3 className='font-Comfortaa text-[10px]'>Raining</h3>
        </div>
        <div className={`weather-parameter flex flex-row weather-parameter font-Comfortaa text-xs max-[315px]:text-[9px] md:flex-${flexDirection} md:gap-2`}>
          <h3 className='mr-2'>Temp: <span>18.71</span></h3>
          <h3 className='mr-2'>Wind: <span>4.31m/s</span></h3>
          <h3 className='mr-2'>Humidity: <span>76%</span></h3>
        </div>
    </div>
  )
}

export default Card
