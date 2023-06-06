import React, { useState } from 'react';
import Header from "../components/Header";
import AdminWindow from "../components/AddNewPlace";

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-secondary rounded-lg shadow-lg text-white mx-2 md:mx-4 my-6 md:my-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 cursor-pointer">
      <img className="rounded-t-lg w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const CleanPlace = () => {
  const [adminWindowOpen, setAdminWindowOpen] = useState(false);
  const role = localStorage.getItem('role');
  const [cards, setCards] = useState([
    {
      title: 'place 1',
      description: '30 points',
      image: 'images/profile.jpg',
    },
    {
      title: 'place 2',
      description: '40 points',
      image: 'images/profile.jpg',
    },
    {
      title: 'place 1',
      description: '30 points',
      image: 'images/profile.jpg',
    },
    {
      title: 'place 2',
      description: '40 points',
      image: 'images/profile.jpg',
    },
    {
      title: 'place 1',
      description: '30 points',
      image: 'images/profile.jpg',
    },
    {
      title: 'place 2',
      description: '40 points',
      image: 'images/profile.jpg',
    },
  ]);

  const openAdminWindow = () => {
    setAdminWindowOpen(true);
  };

  const closeAdminWindow = () => {
    setAdminWindowOpen(false);
  };

  const handleSubmit = (data) => {
    console.log('Submitted data:', data);
    // Perform any necessary actions with the submitted data
    // For example, you can update the state and add a new card to the list
    const newCard = {
      title: data.place,
      description: data.points + ' Points',
      image: data.imageURL,
    };
    setCards([...cards, newCard]);
    setAdminWindowOpen(false);
  };

  return (
    <div className="h-screen bg-primary">
      <Header />
      <div className="bg-primary flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 text-white text-center">
          Places Available for Cleaning
        </h1>
        <div className="flex flex-wrap">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        {role === 'admin' ? (
          <button
            onClick={openAdminWindow}
            className="fixed bottom-4 right-4 bg-green-900 text-primary rounded-full p-3 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <circle cx="10" cy="10" r="9" className="text-primary" />
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
                className="text-white"
              />
            </svg>
          </button>
        ) : (
          ''
        )}
        {adminWindowOpen && (
          <AdminWindow onClose={closeAdminWindow} onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
};

export default CleanPlace;
