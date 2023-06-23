import React, { useState } from 'react';

const AddNewPlace = ({ onClose, onSubmit }) => {
  const [place, setPlace] = useState('');
  const [points, setPoints] = useState();
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = () => {
    onSubmit({ place, points, imageURL });
    fetch('https://mini-project-mkgl.onrender.com/plot', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": place,
        "points": points,
        "image": imageURL
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
      {console.log(imageURL)}
      <div className="bg-primary rounded-lg p-6 max-w-lg flex flex-col">
        <h2 className="text-white text-xl font-bold mb-4">Add a New Place</h2>
        <input
          type="text"
          placeholder="Place Name"
          value={place}
          required
          onChange={(e) => setPlace(e.target.value)}
          className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px]  m-1 focus:shadow-md  focus:outline-none focus:ring-0'
        />
        <input
          type="text"
          placeholder="Points"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
          required
          className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px]  m-1 focus:shadow-md  focus:outline-none focus:ring-0'
        />
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (event) => {
                setImageURL(event.target.result);
              };
              reader.readAsDataURL(file);
            }
          }}
          className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px]  m-1 focus:shadow-md  focus:outline-none focus:ring-0'
          required
        />
        <div className="flex justify-end flex-col">
          <button
            onClick={handleSubmit}
            className='rounded-2xl my-2 text-white bg-sky-500  px-6 py-2 shadow-md hover:text-secondary hover:bg-sky-600 transition duration-200 ease-in'
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className='rounded-2xl  text-white bg-sky-500  px-6 py-2 shadow-md hover:text-secondary hover:bg-sky-600 transition duration-200 ease-in'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewPlace;
