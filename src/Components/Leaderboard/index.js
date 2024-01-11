import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  // Set up a listener to fetch and update the leaderboard in real-time
  useEffect(() => {
    const Users = firebase.firestore().collection("Users");

    // Query Firestore to fetch the top 10 users based on "Score" in ascending order
    const query = Users.orderBy("Score", "asc").limit(10);

    const unsubscribe = query.onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setLeaderboardData(data);
    });

    // Return a cleanup function to unsubscribe from the snapshot listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center", textAlign: 'center', backgroundColor: '#1E1450' }}>
        <div style={{width:'100vw', display: "flex", justifyContent: "center", alignItems: "center"}}>
          <h1 className="specialFont" style={{color: 'white'}}>LEADERBOARD</h1>
        </div>
        <div style={{width: '100vw', background: '#1E1450', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <table style={{width: '400px', border:'1px solid white', borderBottom: 'none'}}>
            <thead style={{border:'1px solid white'}}>
              <tr style={{border:'1px solid white'}}>
                <th style={{color: 'white', padding:'10px', background: 'black', borderBottom: '1px solid white', borderRight: '1px solid white'}} className="specialFont">NAME</th>
                <th style={{color: 'white', padding:'10px', background: 'black', borderBottom: '1px solid white', borderLeft: 'none'}} className="specialFont">SCORE</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((user) => (
                <tr key={user.id}>
                  <td style={{padding:'10px', borderBottom: '1px solid white', borderRight: '1px solid white'}}>{user.Name}</td>
                  <td style={{padding:'10px', borderBottom: '1px solid white'}}>{user.Score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Leaderboard;
