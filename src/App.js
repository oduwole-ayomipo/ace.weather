import './App.css';
import React from 'react';
import TopNav from './components/TopNav';
import Main from './components/Main';

function App() {
  return (
    <div className="App overflow-hidden">
      <TopNav />
      <Main />
    </div>
  );
}

export default App;
