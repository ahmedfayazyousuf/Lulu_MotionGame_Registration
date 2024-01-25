import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import Leaderboard from './Components/Leaderboard';
import Admin from './Components/Admin';
import Player1Registration from './Components/Player1_Registration';
import Player2Registration from './Components/Player2_Registration';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Player1Registration" element={<Player1Registration />} />
          <Route path="/Player2Registration" element={<Player2Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;