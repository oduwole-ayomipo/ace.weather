import React from 'react';
import { UilSearch } from '@iconscout/react-unicons';

function SearchBar() {
  return (
    <div className='search-navbar flex items-center justify-between font-Comfortaa font-medium text-custom-secondary text-xs bg-custom-white w-full p-3 max-[284px]:text-[10px]  min-[520px]:px-6 md:justify-end'>
        <div className='input-field flex items-center bg-custom-primary rounded-2xl focus:outline-none min-w-[60%] shadow-sm'>
            <span className='px-2'>
                <UilSearch className="w-4 text-custom-secondary" role="button" />
            </span>
            <input
            className='input-field text-custom-secondary bg-custom-primary rounded-2xl w-full py-2 focus:outline-none capitalize placeholder:lowercase'
            type="text"
            name="search"
            id="search"
            placeholder="search city..."
            />
        </div>
        <div className='location-button-container text-custom-secondary whitespace-normal mx-4 md:mx-8 '>
            <p className='location-button p-1' role='button'>use current <br /> location</p>
        </div>
    </div>

  );
}

export default SearchBar;
