import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScanAgainButton = () => {
  const role = localStorage.getItem('role');
  const status = localStorage.getItem('status');
  const navigate = useNavigate();
  const handleScanAgain = () => {
    navigate('/scanner')
  };
  const handleStopScan = () => {
    navigate('/scoreincreased')
  };

  return (
    <div className='flex items-center justify-center bg-primary h-screen flex-col gap-2'>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleScanAgain}
      >
        Scan Again
      </button>
      {role === "user" ?
      
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded"
          onClick={handleStopScan}
        >
          Dispose
        </button>
        : ""}
    </div >
  );
};

export default ScanAgainButton;
