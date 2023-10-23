import React, {useState, useEffect} from 'react'
import Card from './Card'
import SearchBar from './SearchBar'
import sunIcon from '../assets/sunicon.png'

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
  
    const days = ["Monday", 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'];
  
    // formatting the time
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const formattedMinute =  minutes < 10 ? `0${minutes}` : minutes; // Add a leading zero if minutes are less than 10
    const amPM = hours >= 12 ? "PM" : "AM";
    const timeformat = `${hours % 12 || 12}:${formattedMinute}${amPM}`;
  
    // formatting the date
    const weekDay = days[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    const dateformat = `${weekDay}, ${date} ${month} '${currentDate.getFullYear().toString().substr(2, 2)}`;
  
    const dayOne_dateformat = `${days[(currentDate.getDay() + 1) % 7]}, ${currentDate.getDate() + 1} ${month} '${currentDate.getFullYear().toString().substr(2, 2)}`;
    const dayTwo_dateformat = `${days[(currentDate.getDay() + 2) % 7]}, ${currentDate.getDate() + 2} ${month} '${currentDate.getFullYear().toString().substr(2, 2)}`;
    const dayThree_dateformat = `${days[(currentDate.getDay() + 3) % 7]}, ${currentDate.getDate() + 3} ${month} '${currentDate.getFullYear().toString().substr(2, 2)}`;
    const dayFour_dateformat = `${days[(currentDate.getDay() + 4) % 7]}, ${currentDate.getDate() + 4} ${month} '${currentDate.getFullYear().toString().substr(2, 2)}`;
    const dayFive_dateformat = `${days[(currentDate.getDay() + 5) % 7]}, ${currentDate.getDate() + 5} ${month} '${currentDate.getFullYear().toString().substr(2, 2)}`;
    const daySix_dateformat = `${days[(currentDate.getDay() + 6) % 7]}, ${currentDate.getDate() + 6} ${month} '${currentDate.getFullYear().toString().substr(2, 2)}`;
  

  return (
    <div className='main-container relative w-full opacity-80'>
        <SearchBar />
        <div className='flex flex-col justify-start p-3 min-[520px]:px-6 md:py-8'>
            <div className='card-top-data mb-12'>
                <h4 className='font-Coiny text-[15px] uppercase md:text-2xl'>{timeformat} - {dateformat}</h4>
                <div className='weatherForecast flex items-center py-2 gap-1'>
                    <span>
                        <img 
                            className='sunIcon h-7'
                            src={sunIcon} 
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
                    <h4 className='font-Coiny text-2xl leading-[23px]  md:text-4xl'>Lagos, NG</h4>
                    <h3 className='font-Comfortaa text-[10px] md:text-lg'>Temp: <span>18.71</span>  Wind: <span>4.31 m/s</span> Humidity: <span>76%</span></h3>
                </div>
            </div>
            <div className='breaker my-4'>
                <hr className='text-custom-white h-3 md:h-8' />
            </div>
            <div>
                <div  className='font-Coiny text-sm py-2 md:text-2xl'>
                    <h3>6-Day Forecast</h3>
                </div>

                {/* card group container */}
                <div className='w-full md:flex md:gap-4' > 
                    <Card 
                        flexDirection={"col"}
                        nextDate={dayOne_dateformat}
                    />
                    <Card 
                        flexDirection={"col"}
                        nextDate={dayTwo_dateformat}                      
                    />
                    <Card 
                        flexDirection={"col"}
                        nextDate={dayThree_dateformat}
                    />
                    <Card
                        flexDirection={"col"}
                        nextDate={dayFour_dateformat}
                    />
                </div>
                <div className='md:flex md:justify-between gap-4' > 
                    <Card 
                        nextDate={dayFive_dateformat}
                    />
                    
                    <Card 
                        nextDate={daySix_dateformat}
                    />
                </div>
            </div>
        </div>
    </div>

  )
}

export default Main