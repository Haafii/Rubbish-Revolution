import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const DisposePage = () => {
  const navigate = useNavigate();
  const status = localStorage.getItem('status');

  const handleContinue = () => {
      navigate("/scanner")
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary">
      {status === 'no' ?
        <div>
          <p className="text-xl mb-4 text-white">
            the qr code already used for another disposal
            generate new qr code and 
          </p>
          <button
            onClick={handleContinue}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Scan
          </button>
        </div>
        :
        <div>
          <button
            onClick={handleContinue}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Continue to Dispose
          </button>
        </div>}

    </div >
  );
};

export default DisposePage;
