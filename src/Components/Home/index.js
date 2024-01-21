import { NavLink } from 'react-router-dom';
import React from 'react';
import DPWorldLogo from '../1_Assets/LuluLogo.png';

const Success = () => {

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100vh", justifyContent: "center", alignItems: "center", flexWrap: 'wrap', textAlign: 'center' }}>
        <img style={{ width: '500px'}} src={DPWorldLogo} alt="tick" />
        <h1 style={{ color: 'black', fontSize: '25px', marginTop: '60px' }}>INSTRUCTIONS</h1>

        <p style={{fontSize: '20px', color: '#DA1E59'}}>Join the Race!</p>
        <p style={{fontSize: '15px', color: 'black', marginTop: '-15px', width: '65%'}}>Register as a Racer. <br></br>Grab your designated joystick and get set for high-octane action!</p>

        <p style={{fontSize: '20px', color: '#DA1E59'}}>Lights Out, Go Time!</p>
        <p style={{fontSize: '15px', color: 'black', marginTop: '-15px', width: '65%'}}>When those lights go out, your engines roar to life. <br></br> Rev up your engines and let loose on the track!</p>

        <p style={{fontSize: '20px', color: '#DA1E59'}}>Max Thrills, No Limits!</p>
        <p style={{fontSize: '15px', color: 'black', marginTop: '-15px', width: '65%'}}>It's pedal-to-the-metal time! <br></br> Conquer every curve, break every record and feel the adrenaline rush!</p>

        
        <p style={{fontSize: '20px', color: '#DA1E59'}}>5 Laps of Epic Excitement!</p>
        <p style={{fontSize: '15px', color: 'black', marginTop: '-15px', width: '65%'}}>Race against the clock. <br></br>Aim for the leaderboard's glory!</p>
        <p style={{fontSize: '15px', color: 'black', marginTop: '-12px'}}>Can you reach the top and become a legend?</p>


        <NavLink to="/Player1Registration" style={{textDecoration: 'none'}}>
            <div style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: '40px'}}>
                <button id="buttontext" style={{backgroundColor: 'red', height: '70px', padding: '10px', width: '250px', borderRadius: '120px', fontSize: '25px', color: 'white', border: '1px solid transparent'}}>LETS GO!</button>
            </div>
        </NavLink>

    </div>
  )
}

export default Success;