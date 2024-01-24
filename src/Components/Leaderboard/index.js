import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import BackgroundLeaderboard from '../1_Assets/Images/LeaderboardBG.png';
import LuluLogo from '../1_Assets/LuluLogo.png';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const formatScore = (score) => {
    const formattedScore = Math.floor(score); // Use Math.floor to remove decimal places
    return formattedScore < 10 ? `0${formattedScore}` : formattedScore.toString();
  };

  useEffect(() => {

    const Leaderboard = firebase.firestore().collection("Leaderboard");
    const query = Leaderboard.orderBy("Score", "desc").limit(10);

    const unsubscribe = query.onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setLeaderboardData(data);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100vh", justifyContent: "center", alignItems: "center", textAlign: 'center', backgroundColor: '#1E1450', backgroundImage: `url(${BackgroundLeaderboard})`, backgroundPosition: 'top', backgroundSize: ' 1080px 1920px', backgroundRepeat: 'repeat', }} >
        
        <img style={{ width: '250px', position: 'absolute', top: '60px', right: '60px'}} src={LuluLogo} alt="LuluLogo" />

        <div style={{ width: '100%', display: "flex", justifyContent: "center", alignItems: "center", }} >
          <div style={{  backgroundImage: 'linear-gradient(#76C0F7, #0567B5)', margin: '50px', height: '120px', width: '700px', borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <h1 style={{ color: 'white', fontSize: '65px', marginTop: '30px' }}>LEADERBOARD</h1>
          </div>
        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
          <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
            <div style={{ display: 'flex', width: '100%', marginBottom: '20px' }}>
              <div style={{ flex: '40%', borderRadius: '15px', background: 'rgba(128,128,128,0)', display: 'flex', justifyContent: 'flex-start', paddingLeft: '20px', }} ></div>
                <div style={{ flex: '80%', borderRadius: '15px', justifyContent: 'space-between', marginLeft: '-340px', display: 'flex', justifyItems: 'center', alignItems: 'center'}} >

                  <div style={{ paddingLeft: '90px', fontSize: '20px', color: '#003561' }}>
                    <h1>NAME</h1>
                  </div>

                  <div style={{ paddingRight: '90px', fontSize: '20px', color: '#003561' }}>
                    <h1>SCORE</h1>
                  </div>

              </div>
            </div>

            {leaderboardData.map((user, index) => (
              <div style={{ display: 'flex', width: '100%', marginBottom: '20px' }}>

                <div style={{ flex: '40%', borderRadius: '15px', backgroundColor: '#0567B5', display: 'flex', justifyContent: 'flex-start', paddingLeft: '30px', }} >
                  <h1 style={{ color: 'white', fontSize: '40px' }}>
                    {index + 1 === 10 ? index + 1 : `0${index + 1}`}
                  </h1>
                </div>

                <div style={{ flex: '80%', borderRadius: '15px',  backgroundImage: 'linear-gradient(#1E91D5, #80c8f2)', justifyContent: 'space-between', marginLeft: '-340px', display: 'flex', justifyItems: 'center', alignItems: 'center', }} >
                  <div style={{ paddingLeft: '90px', fontSize: '20px', color: '#1E1450' }}>
                    <h1>{user.Name.split(' ')[0]}</h1>
                  </div>

                  <div style={{ paddingRight: '90px', fontSize: '20px', color: '#1E1450' }}>
                    <h1>{formatScore(user.Score)}</h1>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
