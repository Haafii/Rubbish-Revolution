import React, { useState, useEffect } from 'react';
import Header from "../components/Header";

function AdminControl() {
  const buttonValue = localStorage.getItem('admincontrolbuttonvalue');
  const [ranking, setRanking] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditWindowOpen, setIsEditWindowOpen] = useState(false); // State to track the visibility of the edit window
  const [earnedPoints, setEarnedPoints] = useState('');
  const [playerName, setPlayerName] = useState(''); // State to store the entered points

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://mini-project-mkgl.onrender.com/user_leaderboadrd',
          requestOptions
        );
        const result = await response.json();
        setRanking(result);
        setIsLoading(false);
      } catch (error) {
        console.log('error', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  function handleDelete(name) {
    setIsLoading(true)
    console.log(`Deleting ${name}`);
    fetch('https://mini-project-mkgl.onrender.com/userdelete', {
      method: 'DELETE',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": name
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

    // Add your logic to delete the player here
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://mini-project-mkgl.onrender.com/user_leaderboadrd',
          requestOptions
        );
        const result = await response.json();
        setRanking(result);
        setIsLoading(false);
      } catch (error) {
        console.log('error', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }
  // let playerName;

  function handleEdit(name) {
    console.log(`Editing ${name}`);
    setIsEditWindowOpen(true); // Open the edit window
    // playerName = name;
    setPlayerName(name)
    console.log("handle edit " + playerName);
  }
  function handleAddPoints() {

    console.log('Adding points:', earnedPoints);
    console.log("handle add point " + playerName);
    // Add your logic to handle the added points here
    setIsEditWindowOpen(false); // Close the edit window
    fetch('https://mini-project-mkgl.onrender.com/adminedit', {
      method: 'PUT',
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('userId')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": playerName,
        "point": earnedPoints
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

    setIsLoading(true)
    // Add your logic to delete the player here
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://mini-project-mkgl.onrender.com/user_leaderboadrd',
          requestOptions
        );
        const result = await response.json();
        setRanking(result);
        setIsLoading(false);
      } catch (error) {
        console.log('error', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }

  const leaderboardData = ranking.map((obj) => ({
    name: obj.name,
    score: obj.points,
    avatar: '../../images/profile.jpg',
  }));

  if (isLoading) {
    return (
      <div>
        <div className="bg-primary flex flex-col items-center justify-center min-h-screen">
          <div className="mt-8">
            <div className="inline-flex rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-dark animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="mx-auto h-screen bg-primary">
        {buttonValue === 'delete' && (
          <>
            <div className="bg-red-500 text-white py-4 px-8 flex justify-center">
              Delete Accounts
            </div>
            {leaderboardData.map((player, index) => (
              <div
                key={index}
                className={`flex items-center px-6 py-4 bg-secondary rounded-md mb-2 `}
              >
                <img
                  className="h-10 w-10 rounded-full mr-4 object-cover"
                  src={player.avatar}
                  alt={player.name}
                />
                <div className="text-lg font-semibold text-white">
                  {index + 1}. {player.name}
                </div>
                {(
                  <button
                    className="text-lg ml-auto text-white font-bold"
                    onClick={() => handleDelete(player.name)}
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
          </>
        )}

        {buttonValue === 'edit' && (
          <>
            <div className="bg-yellow-500 text-white py-4 px-8 flex  justify-center">
              Edit Points
            </div>
            {leaderboardData.map((player, index) => (
              <div
                key={index}
                className={`flex items-center px-6 py-4 bg-secondary rounded-md mb-2 `}
              >
                <img
                  className="h-10 w-10 rounded-full mr-4 object-cover"
                  src={player.avatar}
                  alt={player.name}
                />
                <div className="text-lg font-semibold text-white">
                  {index + 1}. {player.name}
                </div>
                <div className="text-lg  ml-auto text-white font-bold">
                  {player.score}
                </div>
                {buttonValue === 'edit' && (
                  <button
                    className="text-lg ml-auto text-white font-bold"
                    onClick={() => handleEdit(player.name)}
                  >
                    Edit
                  </button>
                )}
              </div>
            ))}
          </>
        )}

        {buttonValue === 'calculate' && (
          <div className="bg-green-500 text-white py-4 px-8 flex justify-center">
            Calculate Value
          </div>
        )}

        {/* Edit Window */}
        {isEditWindowOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-md max-w-xs">
              <h3 className="text-lg font-semibold mb-4">Edit Point</h3>
              <input
                type="number"
                className="px-4 py-2 border border-gray-300 rounded-md w-full mb-4"
                placeholder="Enter earned points"
                value={earnedPoints}
                onChange={(e) => setEarnedPoints(e.target.value)}
              />
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={handleAddPoints}
                >
                  Add
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-md"
                  onClick={() => setIsEditWindowOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AdminControl;
