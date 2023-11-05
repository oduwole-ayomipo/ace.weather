import './App.css';
import React from 'react';
import Main from './components/Main';
import getGeoCoordinate from './services/geocoding';

function App() {
  return (
    <div className="App relative bg-gradient-to-br from-custom-deep md:px-14 to-custom-light w-full">
      <Main />
    </div>
  );
}

export default App;
