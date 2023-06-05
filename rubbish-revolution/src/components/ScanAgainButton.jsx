import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScanAgainButton = () => {
  const navigate = useNavigate();
  const handleScanAgain = () => {
    navigate('/scanner')
  };
  return (
    <div className='flex items-center justify-center bg-primary h-screen'>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleScanAgain}
      >
        Scan Again
      </button>
    </div>
  );
};

export default ScanAgainButton;
