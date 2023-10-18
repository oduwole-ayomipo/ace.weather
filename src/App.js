import './App.css';
import React from 'react';
import Logo from './components/Logo'
import Main from './components/Main';
import rain from './assets/rain.png'

function App() {
  return (
    <div className="App relative overflow-hidden w-full md:flex">
      <div className="weather-image">
        <img 
        src={rain}
        alt='weather condition'
        className='absolute h-full w-screen' />
      </div>
    
      <Logo />
      <Main />
    </div>
  );
}

export default App;
