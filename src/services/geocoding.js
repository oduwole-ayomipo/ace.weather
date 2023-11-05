const API_KEY = "fef31d52f1263e1c90234c0421e8716d";
const BASE_URL = "https://api.openweathermap.org/geo/1.0/direct";

const getGeoCoordinate = async (city) => {
    const url = new URL(BASE_URL);

    url.search = new URLSearchParams({
      q: city,
      limit: 5,
      appid: API_KEY,
    });
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      if (data && data.length > 0) {
        const { name, lat, lon, country } = data[0];
        return {
          name: name,
          lat: lat,
          lon: lon,
          country: country,
        };
      } else {
        throw new Error('No data found for the specified city');
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error; // Rethrow the error to be caught in the handleSearch function
    }
  };

  
  
export default getGeoCoordinate;