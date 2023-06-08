import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
// import GameScreen from './components/GameScreen/GameScreen';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/game" element={<GameScreen />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
