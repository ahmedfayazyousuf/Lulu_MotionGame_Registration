import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import DPWorldLogo from '../1_Assets/DPWorldLogo.png';
import firebase from '../../firebase';

const Success = () => {
  const [player1Name, setPlayer1Name] = useState("Loading...");
  const [player2Name, setPlayer2Name] = useState("Loading...");

  useEffect(() => {
    const CurrentUsers = firebase.firestore().collection("CurrentUsers");

    // Set up a listener to fetch the data from "CurrentUsers" collection in real-time
    const unsubscribe = CurrentUsers.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const playerData = doc.data();
        if (playerData.Player === "P1") {
          setPlayer1Name(playerData.Name);
        } else if (playerData.Player === "P2") {
          setPlayer2Name(playerData.Name);
        }
      });
    });

    // Return a cleanup function to unsubscribe from the snapshot listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100vh", justifyContent: "center", alignItems: "center", flexWrap: 'wrap', textAlign: 'center' }}>
        <img style={{ width: '500px'}} src={DPWorldLogo} alt="tick" />
        <h1 style={{ paddingRight: '50px', paddingLeft: '50px', color: 'white', fontSize: '20px', marginTop: '60px' }}>Your responses have been recorded.</h1>
        <h1 style={{ paddingRight: '50px', paddingLeft: '50px', color: 'white', marginTop: '-10px', marginBottom: '60px' }}>LET'S PLAY!</h1>

          <div style={{ display: 'flex', width: '80%'}}>
            <div style={{flex: '100px', borderRadius: '100px', background: 'rgba(128,128,128,0.4)', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px'}}>
              <h1 style={{ color: 'white', fontSize: '25px', marginLeft: '20px' }}>
                Player 1
              </h1>
            </div>
            <div style={{ flex: '100px', borderRadius: '100px',background: 'white',justifyContent: 'space-between', marginLeft: '-250px', display: 'flex', justifyItems: 'center', alignItems: 'center'}}>
              <div>
                <p style={{ color: '#1E1450', fontSize: '25px', marginLeft: '40px' }}>{player1Name}</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', width: '80%', marginTop: '10px'}}>
            <div style={{flex: '100px', borderRadius: '100px', background: 'rgba(128,128,128,0.4)', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px'}}>
              <h1 style={{ color: 'white', fontSize: '25px', marginLeft: '20px' }}>
                Player 2
              </h1>
            </div>
            <div style={{ flex: '100px', borderRadius: '100px',background: 'white',justifyContent: 'space-between', marginLeft: '-250px', display: 'flex', justifyItems: 'center', alignItems: 'center'}}>
              <div>
                <p style={{ color: '#1E1450', fontSize: '25px', marginLeft: '40px' }}>{player2Name}</p>
              </div>
            </div>
          </div>

          <NavLink to="/" style={{textDecoration: 'none'}}>
            <div style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: '60px'}}>
                <button id="buttontext" style={{background: 'white', height: '70px', padding: '10px', width: '250px', backgroundColor: 'white', borderRadius: '120px', fontSize: '25px', color: '#1E1450', border: '1px solid transparent'}}>NEXT GAME</button>
            </div>
          </NavLink>

    </div>
  )
}

export default Success;