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
          <p className="text-xl mb-4 text-white px-6">
            The QR code already used for another disposal generate new QR code and 
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
          <p className="text-xl mb-4 text-white px-6">
            Scan Qr/Bar code of product for Dispose 
          </p>
          <button
            onClick={handleContinue}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Scan
          </button>
        </div>}

    </div >
  );
};

export default DisposePage;
