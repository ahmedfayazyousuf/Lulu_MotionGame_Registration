import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import BackgroundLeaderboard from '../1_Assets/BackgroundLeaderboard.png';
import DPWorldLogo from '../1_Assets/DPWorldLogo.png';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  // eslint-disable-next-line
  const [usersData, setUsersData] = useState([]);

  const formatScore = (score) => {
    const formattedScore = score.toFixed(2);
    return formattedScore.replace(/^(\d)\./, '0$1.');
  };

  useEffect(() => {

    const usersCollection = firebase.firestore().collection("Users");
    // eslint-disable-next-line
    const usersUnsubscribe = usersCollection.onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() });
      });
      setUsersData(users);
      console.log("Users Collection:", users);
    });


    const Leaderboard = firebase.firestore().collection("Leaderboard");
    const query = Leaderboard.orderBy("Score", "asc").limit(10);

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          textAlign: 'center',
          backgroundColor: '#1E1450',
          backgroundImage: `url(${BackgroundLeaderboard})`,
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '5px',
            paddingTop: '45px',
          }}
        >
          <img style={{ width: '60%' }} src={DPWorldLogo} alt="NBALogo" />
        </div>

        <div
          style={{
            width: '100%',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: '#DA1E59',
              margin: '50px',
              padding: '0',
              height: '120px',
              width: '700px',
              borderRadius: '100px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h1 style={{ color: 'white', fontSize: '65px', marginTop: '30px' }}>HIGH SCORE</h1>
          </div>
        </div>

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
            <div style={{ display: 'flex', width: '100%', marginBottom: '20px' }}>
              <div
                style={{
                  flex: '40%',
                  borderRadius: '100px',
                  background: 'rgba(128,128,128,0)',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  paddingLeft: '20px',
                }}
              ></div>
              <div
                style={{
                  flex: '80%',
                  borderRadius: '100px',
                  justifyContent: 'space-between',
                  marginLeft: '-340px',
                  display: 'flex',
                  justifyItems: 'center',
                  alignItems: 'center',
                }}
              >
                <div style={{ paddingLeft: '90px', fontSize: '20px', color: 'white' }}>
                  <h1>NAME</h1>
                </div>

                <div style={{ paddingRight: '90px', fontSize: '20px', color: 'white' }}>
                  <h1>SCORE</h1>
                </div>
              </div>
            </div>

            {leaderboardData.map((user, index) => (
              <div style={{ display: 'flex', width: '100%', marginBottom: '20px' }}>
                <div
                  style={{
                    flex: '40%',
                    borderRadius: '100px',
                    background: 'rgba(128,128,128,0.4)',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    paddingLeft: '20px',
                  }}
                >
                  <h1 style={{ color: 'white', fontSize: '40px' }}>
                    {index + 1 === 10 ? index + 1 : `0${index + 1}`}
                  </h1>
                </div>

                <div
                  style={{
                    flex: '80%',
                    borderRadius: '100px',
                    background: 'white',
                    justifyContent: 'space-between',
                    marginLeft: '-340px',
                    display: 'flex',
                    justifyItems: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ paddingLeft: '90px', fontSize: '20px', color: '#1E1450' }}>
                    <h1>{user.Name}</h1>
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
