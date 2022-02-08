import React, { useState } from 'react';
import './App.css';
import { Header } from './components/ui/Header';
import { Assets } from './views/assets';

function App() {
  const [currentView, setCurrentView] = useState()

  return (
    <div className="App">
      <Header />
      <Assets />
    </div>
  );
}

export default App;
