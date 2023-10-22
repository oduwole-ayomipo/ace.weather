import './App.css';
import React from 'react';
import Logo from './components/Logo'
import Main from './components/Main';

function App() {
  return (
    <div className="App relative overflow-hidden bg-gradient-to-br from-custom-purple to-custom-orange w-full md:flex">
      <Logo />
      <Main />
    </div>
  );
}

export default App;
