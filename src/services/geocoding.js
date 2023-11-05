const API_KEY = "fef31d52f1263e1c90234c0421e8716d";
const BASE_URL = "https://api.openweathermap.org/geo/1.0/direct";

let city = "London";

const getGeoCoordinate = (city) => {
    const url = new URL(BASE_URL);
    url.search = new URLSearchParams({
        q: city,
        limit: 5,
        appid: API_KEY,
    });

    console.log(url);

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.length > 0) {
                const { name, lat, lon, country } = data[0];
                return {
                    name: name,
                    lat: lat,
                    lon: lon,
                    country: country
                };
            } else {
                throw new Error('No data found for the specified city');
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
};

getGeoCoordinate(city)
    .then(result => console.log(result))
    .catch(error => console.error(error));

export default getGeoCoordinate