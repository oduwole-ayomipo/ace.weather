import React from 'react'


function Card({ 
                alt,
                weatherIcon,
                weatherForecast,
                High,
                Low,
                nextDate }) {
  return (
    <div className={`card-container flex flex-col align-middle gap-5 md:w-[48%] w-[100%] backdrop-blur-[20px] bg-custom-accent p-3 lg:px-6 my-3 cursor-pointer rounded-xl `}>
      <div className='card-head'>
        <h4 className='font-Coiny text-sm uppercase'>{nextDate}</h4>
      </div>
        <div className='card-body flex justify-between min-[320px]:flex-col'>
          <div className='card-top-data'>
              <div className='forecast-container flex flex-col gap-1 items-start'>
                <img 
                  className='overcastClouds w-10'
                  src={weatherIcon} 
                  alt={alt} />  
                                
                  <h3 className='font-Comfortaa text-[0.7rem]'>{weatherForecast}</h3>

              </div>
        
          </div>
          <div className={`weather-parameter flex flex-col justify-between weather-parameter font-Comfortaa text-[0.7rem]`}>
            <h3 className=''>H: <span>{High}°c</span></h3>
            <h3 className=''>L: <span>{Low}°c</span></h3>
          </div>
        </div>
        
    </div>
  )
}

export default Card
