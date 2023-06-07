import React, { useState, useEffect } from 'react'

function AdminControl() {
  const buttonValue = localStorage.getItem('admincontrolbuttonvalue')
  console.log(buttonValue);
  const [ranking, setRanking] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://mini-project-mkgl.onrender.com/user_leaderboadrd", requestOptions);
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
    console.log(`Deleting ${name}`);
    // Add your logic to delete the player here
    const fetchData = async () => {
      try {
        const response = await fetch("https://mini-project-mkgl.onrender.com/user_leaderboadrd", requestOptions);
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


  function handleEdit(name){
    console.log(`Editing ${name}`);
  }
  const leaderboardData = ranking.map(obj => ({ name: obj.name, score: obj.points, avatar: '../../images/profile.jpg' }));

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
          <div className="bg-yellow-500 text-white py-4 px-8 flex justify-center">
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
              {(
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
    </div>
  );
}

export default AdminControl


