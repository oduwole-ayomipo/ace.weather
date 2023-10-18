import React from 'react'
import Card from './Card'
import SearchBar from './SearchBar'


function Main() {

    // Date format logic
    function formatDate() {
        const currentDate = new Date();

        let days = ["Monday", 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        let months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decembera']

        // formatting the time
        const hours = currentDate.getHours()
        const minutes = currentDate.getMinutes()
        const amPM = hours >= 12 ? "PM" : "AM"
        const timeformat = `${hours % 12 || 12}:${minutes}${amPM}`

        // formatting the date
        const weekDay = days[currentDate.getDay()];
        const month = months[currentDate.getMonth()];
        const date = currentDate.getDate()
        const dateformat = `${weekDay}, ${month} ${date}`

        const dateAndTime = `${timeformat} ${dateformat}`

        return dateAndTime;
    }

    
    const formattedDate = formatDate()

  return (
    <div className='main-container relative w-full opacity-80'>
        <SearchBar />
        <div className='flex flex-col justify-start bg-custom-primary p-3 min-[520px]:px-6 md:py-8'>
            <div className='card-top-data py-3'>
                <h4 className='font-Coiny text-[15px] uppercase md:text-2xl'>{formattedDate}</h4>
                <h3 className='font-Comfortaa text-[11px] md:text-lg'>Raining</h3>
            </div>
            <div className='weather-image'>
                <img 
                    className='h-28 md:h-36' 
                    alt=''/>
            </div>
            <div className='main-weather-data flex items-center'>
                <div className='font-Coiny flex text-7xl leading-[70px] md:text-9xl'>
                    <h4>16 </h4>
                    <div className='degrees pt-3 text-3xl leading-[20px] h-full md:text-5xl'>°</div>

                </div>
                <div className='card-buttom-data px-2 flex flex-col'>
                    <h4 className='font-Coiny text-2xl leading-[23px] tracking-tighter md:text-4xl'>London</h4>
                    <h3 className='font-Comfortaa text-[10px] md:text-lg'>Temp: <span>18.71</span>  Wind: <span>4.31 m/s</span> Humidity: <span>76%</span></h3>
                </div>
            </div>
            <div>
                <hr className='text-custom-white h-3 md:h-8' />
            </div>
            <div>
                <div  className='font-Coiny text-sm py-2 md:text-2xl'>
                    <h3>6-Day Forecast</h3>
                </div>

                {/* card group container */}
                <div className='w-full md:flex md:gap-4' > 
                    <Card 
                        backgroundColor={"custom-secondary"}
                        textColor={"custom-white"}
                        flexDirection={"col"}
                    />
                    <Card 
                        backgroundColor={"custom-white"}
                        textColor={"custom-secondary"} 
                        flexDirection={"col"}
                    />
                    <Card 
                        backgroundColor={"custom-accent"}
                        textColor={"custom-white"}
                        flexDirection={"col"}
                    />
                    <Card
                        backgroundColor={"custom-primary"}
                        textColor={"custom-secondary"} 
                        flexDirection={"col"}
                    />
                </div>
                <div className='md:flex md:justify-between gap-4' > 
                    <Card 
                        backgroundColor={"custom-white"}
                        textColor={"custom-secondary"} 
                    />
                    
                    <Card 
                        backgroundColor={"custom-white"}
                        textColor={"custom-secondary"} 
                    />
                </div>
            </div>
        </div>
    </div>

  )
}

export default Main