import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';

const AdminPage = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const leaderboardRef = firebase.firestore().collection('Leaderboard');
        const snapshot = await leaderboardRef.orderBy('Timestamp', 'desc').get();

        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().Name,
          score: doc.data().Score,
          // Add other fields as needed
        }));

        setLeaderboardData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await firebase.firestore().collection('Leaderboard').doc(userId).delete();
      setLeaderboardData(prevData => prevData.filter(entry => entry.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div style={{ height: '100vh' }}>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <tr key={entry.id}>
              <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.score}</td>
              <td>
                <button onClick={() => handleDelete(entry.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
