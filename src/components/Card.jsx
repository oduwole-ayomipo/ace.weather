import React from 'react'

function Card() {
  return (
    <div className='card-container flex flex-col gap-10 bg-custom-secondary text-custom-white p-4 my-3 cursor-pointer rounded-xl drop-shadow-lg'>
        <div className='card-top-data'>
            <h4 className='font-Coiny text-[13px]'>TUESDAY, 11 Sep '23</h4>
            <h3 className='font-Comfortaa text-[10px]'>Raining</h3>
        </div>
        <div className='card-buttom-data flex font-Comfortaa text-xs  max-[315px]:text-[9px]'>
            <h6>Temp: <span>18.71</span></h6>
            <h6 className='ml-3'>Wind: <span>4.31 m/s</span></h6>
            <h6 className='ml-3'>Humidity: <span>76%</span></h6>
        </div>
    </div>
  )
}

export default Card