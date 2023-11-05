import React, {useState, useEffect} from 'react'
import Card from './Card'
import SearchBar from './SearchBar'
import clearSky from '../assets/clear-sky.png'
import overcastClouds from '../assets/overcast-clouds.png'
import lightRain from '../assets/light-rain.png'
import thunderstorm from '../assets/thunderstorm.png'
import snow from '../assets/snow.png'
import dayThunderstorm from '../assets/day-thunderstorm.png'
import getGeoCoordinate from '../services/geocoding'

function Main() {

    // Date format logic
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000); // Update every 1 second
  
      return () => {
        clearInterval(intervalId); // Clear the interval when the component unmounts
      };
    }, []);
  
    const days = ["Sunday", "Monday", 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'];
  
    // formatting the time
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const formattedMinute =  minutes < 10 ? `0${minutes}` : minutes; // Add a leading zero if minutes are less than 10
    const amPM = hours >= 12 ? "PM" : "AM";
    const timeformat = `${hours % 12 || 12}:${formattedMinute} ${amPM}`;
  
    // formatting the date
    const weekDay = days[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    const dateformat = `${weekDay}, ${date} ${month} '${currentDate.getFullYear().toString().substr(2, 2)}`;
  
    const dayOne_dateformat = `${days[(currentDate.getDay() + 1) % 7]}, 
                               ${(currentDate.getDate() + 1) } 
                               ${month} 
                               '${currentDate.getFullYear().toString().substr(2, 2)}`;
    const dayTwo_dateformat = `${days[(currentDate.getDay() + 2) % 7]}, 
                               ${currentDate.getDate() + 2} 
                               ${month} 
                               '${currentDate.getFullYear().toString().substr(2, 2)}`;
    const dayThree_dateformat = `${days[(currentDate.getDay() + 3) % 7]},
                                 ${currentDate.getDate() + 3} 
                                 ${month} 
                                 '${currentDate.getFullYear().toString().substr(2, 2)}`;
    const dayFour_dateformat = `${days[(currentDate.getDay() + 4) % 7]}, 
                                ${currentDate.getDate() + 4} 
                                ${month} 
                               '${currentDate.getFullYear().toString().substr(2, 2)}`;
    const dayFive_dateformat = `${days[(currentDate.getDay() + 5) % 7]}, 
                                ${currentDate.getDate() + 5} 
                                ${month} 
                               '${currentDate.getFullYear().toString().substr(2, 2)}`;
    const daySix_dateformat = `${days[(currentDate.getDay() + 6) % 7]}, 
                                ${currentDate.getDate() + 6} 
                                ${month} 
                               '${currentDate.getFullYear().toString().substr(2, 2)}`;
  

  return (
    <div className='main-container relative w-full opacity-80'>
        <SearchBar onSearch={getGeoCoordinate} />
        <div className='flex flex-col justify-start p-3 min-[520px]:px-6 md:py-8'>
            <div className='card-top-data mb-12'>
                <h4 className='font-Coiny text-[15px] uppercase md:text-2xl'>{timeformat} - {dateformat}</h4>
                <div className='weatherForecast flex items-center py-2 gap-1'>
                    <span>
                        <img 
                            className='sunIcon h-7'
                            src={clearSky} 
                            alt="Sunny" />
                    </span>
                    <h3 className='font-Comfortaa text-sm md:text-lg'>Sunny</h3>
                </div>
            </div>
            
            <div className='main-weather-data flex items-center'>
                <div className='font-Coiny flex text-7xl leading-[70px] md:text-9xl'>
                    <h4>16 </h4>
                    <div className='degrees pt-3 text-3xl leading-[20px] text-custom-white h-full md:text-5xl'>°</div>

                </div>
                <div className='card-buttom-data px-2 flex flex-col'>
                    <h2 className='font-Coiny text-2xl leading-[23px]  md:text-4xl'>Lagos, NG </h2>
                    <h3 className='font-Comfortaa mt-1.5 text-[10px] md:text-lg'>High: <span>18.71°c</span> Low: <span>18.71°c</span></h3>
                </div>
            </div>
            <div className='breaker my-4'>
                <hr className='text-custom-white h-3 md:h-8' />
            </div>
            <div>
                <div  className='font-Coiny text-lg py-2 md:text-2xl'>
                    <h3>6-Day Forecast</h3>
                </div>

                {/* card group container */}
                <div className='relative flex flex-wrap gap-2 justify-between' > 
                    <Card 
                        nextDate={dayOne_dateformat}
                        weatherIcon={lightRain}
                        weatherForecast="Light Rain"
                        alt = "Light Rain"
                        High= "16.98"
                        Low="10.23"
                    />
                    <Card 
                        nextDate={dayTwo_dateformat}  
                        weatherIcon={clearSky} 
                        weatherForecast="Clear Sky"
                        alt = "Clear Sky"
                        High="16.98"
                        Low="10.23"
                    />
                    <Card 
                        nextDate={dayThree_dateformat}
                        weatherIcon={thunderstorm} 
                        weatherForecast="Thunderstorm"
                        alt = "Thunderstorm"
                        High="16.98"
                        Low="10.23"
                    />
                    <Card
                        nextDate={dayFour_dateformat}
                        weatherIcon={snow} 
                        weatherForecast="Snow"
                        alt = "Snow"
                        High="16.98"
                        Low="10.23"
                    />
                    <Card
                        nextDate={dayFive_dateformat}
                        weatherIcon={overcastClouds} 
                        weatherForecast="Overcast Clouds"
                        alt = "Overcast Clouds"
                        High="16.98"
                        Low="10.23"
                    />
                    <Card
                        nextDate={daySix_dateformat}
                        weatherIcon={dayThunderstorm} 
                        weatherForecast="Thunderstorm"
                        alt = "Thunderstorm"
                        High="16.98"
                        Low="10.23"
                    />
                </div>
            </div>
        </div>
    </div>

  )
}

export default Main