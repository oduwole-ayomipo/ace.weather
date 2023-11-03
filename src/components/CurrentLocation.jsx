import Geocode from 'react-geocode';

const getLocationData = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        // Use reverse geocoding to get city and country information
        Geocode.fromLatLng(latitude, longitude).then(
          (response) => {
            const address = response.results[0].formatted_address;
            const cityCountryArray = address.split(',');
            const city = cityCountryArray[0];
            const country = cityCountryArray[1].trim();
            resolve({ city, country });
          },
          (error) => {
            reject(error);
          }
        );
      });
    } else {
      reject('Geolocation is not supported by this browser.');
    }
  });
};

export default getLocationData;
