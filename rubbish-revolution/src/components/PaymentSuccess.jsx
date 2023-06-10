import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      className="bg-green-500 p-8 shadow-lg text-white text-center h-screen flex items-center flex-col justify-center"
    >
      <h1 className="text-4xl font-bold  mb-12">Success!</h1>
      {showButton && (
        <Link to="/home" className="w-full items-center flex justify-center">
          <button className="flex font-bold justify-center text-black items-center  white px-4 py-3 rounded-md focus:outline-none bg-white hover:bg-gray-300  transition duration-200 ease-in">
            Home
          </button>
        </Link>
      )}
    </motion.div>
  );
};

export default PaymentSuccess;
