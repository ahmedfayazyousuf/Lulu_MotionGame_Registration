import { NavLink } from 'react-router-dom';
import React from 'react';
import LuluLogo from '../1_Assets/LuluLogo.png';

const Success = () => {

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100vh", justifyContent: "center", alignItems: "center", flexWrap: 'wrap', textAlign: 'center' }}>
        <img style={{ width: '500px', marginBottom: '50px'}} src={LuluLogo} alt="LuluLogo" />

        <NavLink to="/Player1Registration" style={{textDecoration: 'none'}}>
            <div style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: '40px'}}>
                <button id="buttontext"  style={{ backgroundImage: 'linear-gradient(#0567B5, #1E91D5)', height: '80px', padding: '10px', width: '250px', borderRadius: '15px', fontSize: '30px', color: 'white', border: '5px solid #0567B5'}}>PLAYER 1</button>
            </div>
        </NavLink>

        <NavLink to="/Player2Registration" style={{textDecoration: 'none'}}>
            <div style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: '40px'}}>
                <button id="buttontext"  style={{ backgroundImage: 'linear-gradient(#0567B5, #1E91D5)', height: '80px', padding: '10px', width: '250px', borderRadius: '15px', fontSize: '30px', color: 'white', border: '5px solid #0567B5'}}>PLAYER 2</button>
            </div>
        </NavLink>

    </div>
  )
}

export default Success;