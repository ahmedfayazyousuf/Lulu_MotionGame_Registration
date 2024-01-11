import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import Success from './Components/Success';
import SuccessPlayer1 from './Components/SuccessPlayer1';
import Leaderboard from './Components/Leaderboard';
import Leaderboard2 from './Components/Leaderboard2';
import Player1Registration from './Components/Player1_Registration';
import Player2Registration from './Components/Player2_Registration';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Success" element={<Success />} />
          <Route path="/SuccessPlayer1" element={<SuccessPlayer1 />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="/Leaderboard2" element={<Leaderboard2 />} />
          <Route path="/Player1Registration" element={<Player1Registration />} />
          <Route path="/Player2Registration" element={<Player2Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;