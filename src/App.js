import './App.css';
import React , {useState} from 'react';
import Main from './components/Main';
import SearchBar from './components/SearchBar';
import getGeoCoordinate from './services/geocoding';


function App() {

  const [searchCity, setSearchCity] = useState('');
  const [locationData, setLocationData] = useState(null);

  //get current location
  const [currentCity, setCurrentCity] = useState('')
  
  

  const handleCurrentLocation = async () => {
    if (navigator.geolocation) {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        );

        if (response.ok) {
          const data = await response.json();
          setCurrentCity(data.city);
        } else {
          console.error('Failed to fetch city data');
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
    console.log(currentCity)
  };




  
  const handleSearch = async () => {
    try {
      const result = await getGeoCoordinate(searchCity);
      console.log(result);
      setLocationData(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App relative bg-gradient-to-br from-custom-deep md:px-14 to-custom-light w-full">
      <SearchBar 
          searchCity={searchCity}
          setSearchCity={setSearchCity}
          locationData={locationData}
          onSearch={handleSearch} 
          onCurrentLocation={handleCurrentLocation}
      />

      <Main locationData={locationData} />
    </div>
  );
}

export default App;
