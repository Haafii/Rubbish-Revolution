import React, { useState, useEffect } from 'react';
import Header from '../components/Header'

const Leaderboard = () => {

  // const [selectedDuration, setSelectedDuration] = useState('today');
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

  // console.log(ranking);


  // const leaderboardData = [
  //   { name: 'John Doe', avatar: './images/profile.jpg', score: 150 },
  //   { name: 'Jane Smith', avatar: './images/profile.jpg', score: 120 },
  //   { name: 'Bob Johnson', avatar: './images/profile.jpg', score: 100 },
  //   { name: 'Alice Brown', avatar: './images/profile.jpg', score: 80 },
  //   { name: 'John Doe', avatar: './images/profile.jpg', score: 150 },
  //   { name: 'Jane Smith', avatar: './images/profile.jpg', score: 120 },
  //   { name: 'Bob Johnson', avatar: './images/profile.jpg', score: 100 },
  //   { name: 'Alice Brown', avatar: './images/profile.jpg', score: 80 },
  // ];
  const leaderboardData = ranking.map(obj => ({ name: obj.name, score: obj.points, avatar: './images/profile.jpg' }));
  // console.log(leaderboardData);

  // const handleDurationChange = (duration) => {
  //   setSelectedDuration(duration);
  // };

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
            {/* <div className="relative inline-block mt-2">
              <select
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={selectedDuration}
                onChange={(e) => handleDurationChange(e.target.value)}
              >
                <option value="today">Today</option>
                <option value="this-week">This Week</option>
                <option value="this-month">This Month</option>
                <option value="all-time">All Time</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11 18a1 1 0 01-.707-.293l-6-6a1 1 0 011.414-1.414L10 15.586l5.293-5.293a1 1 0 011.414 1.414l-6 6A1 1 0 0111 18z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div> */}
          </div>
          <div className="bg-primary shadow-lg">
            {leaderboardData.map((player, index) => (
              <div
                key={index}
                className={`flex items-center px-6 py-4 ${index === 0 ? 'bg-secondary ' : 'bg-secondary'
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