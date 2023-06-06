import React, { useState } from 'react';

const AddNewPlace = ({ onClose, onSubmit }) => {
  const [place, setPlace] = useState('');
  const [points, setPoints] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = () => {
    onSubmit({ place, points, imageURL });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Add a New Place</h2>
        <input
          type="text"
          placeholder="Place Name"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 mb-4"
        />
        <input
          type="text"
          placeholder="Points"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 mb-4"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-primary text-white rounded-lg px-4 py-2"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 rounded-lg px-4 py-2 ml-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewPlace;
