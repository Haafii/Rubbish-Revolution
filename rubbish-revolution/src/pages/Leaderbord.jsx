import React, { useState, useEffect } from 'react';
import Header from '../components/Header'

const Leaderboard = () => {

  const [ranking, setRanking] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const username = localStorage.getItem('username');
  console.log(username);

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

  // console.log(ranking);

  const leaderboardData = ranking.map(obj => ({ name: obj.name, score: obj.points, avatar: './images/profile.jpg' }));

  if (isLoading) {
    return (
      <div>
        <Header />
        <div className="bg-primary flex flex-col items-center justify-center min-h-screen">

          <div className="mt-8">
            <div className="inline-flex rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-dark animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="bg-primary min-h-screen">
        <div className="max-w-md mx-auto bg-primary  rounded-lg overflow-hidden">
          <div className="bg-gray-200 px-6 py-4">
            <h2 className="text-xl font-bold text-gray-700">Leaderboard</h2>
          </div>
          <div className="bg-primary shadow-lg">
            {leaderboardData.map((player, index) => (
              <div
                key={index}
                className={`flex items-center px-6 py-4 ${player.name === username ? 'bg-green-500 ' : 'bg-secondary'
                  } rounded-md mb-2`}
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
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>

  );
};

export default Leaderboard;