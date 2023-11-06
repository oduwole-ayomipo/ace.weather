import { UilSearch } from '@iconscout/react-unicons';

function SearchBar({ searchCity, setSearchCity, onSearch, onCurrentLocation }) {

  const handleSearch = () => {
    onSearch();
  };

  const currentLocationSearch = () => {
    onCurrentLocation();
  }

  return (
    <div className='Nav-bar flex flex-wrap md:flex-nowrap md:items-center justify-center px-6'>
      <div className='Logo mr-auto w-full text-center mt-6 md:w-fit'>
          <h4 className='logo-text font-normal font-Coiny uppercase text-lg'>
              ace.weather
          </h4>
      </div>

      <div className='search-navbar flex items-center justify-between font-Comfortaa font-medium text-xs w-full my-8 max-[284px]:text-[10px]  md:justify-end'>
        <div className='input-field flex items-center backdrop-blur-[20px] bg-gradient-to-br from-[#FFFFFF33] to-[#FFFFFF33] rounded-2xl focus:outline-none min-w-[60%] shadow-md'>
            <span className='px-2'>
                <UilSearch className="w-4 text-custom-white" role="button"
                    onClick={handleSearch}
                 />
            </span>
            <input
            className='input-field bg-[#ffffff00] rounded-2xl w-full py-2 focus:outline-none capitalize placeholder:lowercase'
            type="text"
            name="search"
            id="search"
            placeholder="search city..."
            value={searchCity}
            onInput={(e) => setSearchCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
            />

         
        </div>
        <div className='location-button-container whitespace-normal mx-4 md:mx-8 '>
            <p className='location-button p-1' role='button' onClick={currentLocationSearch} >use current <br /> location</p>
        </div>
    </div>
    </div>


  );
}

export default SearchBar;
