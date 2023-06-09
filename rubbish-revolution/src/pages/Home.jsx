import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [showControlWindow, setShowControlWindow] = useState(false);
  const [calculateValueWindow, setCalculateValueWindow] = useState(false);
  const [earnedPoints, setEarnedPoints] = useState('');

  // Retrieve the user ID and role from local storage
  const userId = localStorage.getItem('userId');

  var myHeaders = new Headers();
  myHeaders.append('Authorization', `bearer ${userId}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://mini-project-mkgl.onrender.com/users/me/',
          requestOptions
        );
        const result = await response.json();
        setUsername(result.name);
        setRole(result.role);
        localStorage.setItem('role', result.role);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  const handleControlClick = () => {
    setShowControlWindow(true);
  };
  const handleDeleteAccount = () => {
    const buttonValue = "delete";
    localStorage.setItem('admincontrolbuttonvalue', buttonValue);
    navigate('/admin/control');
  };

  const handleCalculateValue = () => {
    const buttonValue = "calculate";
    localStorage.setItem('admincontrolbuttonvalue', buttonValue);
    // navigate('/admin/control');
    setCalculateValueWindow(true)
  };

  const handleReset = () => {
    const buttonValue = "edit";
    localStorage.setItem('admincontrolbuttonvalue', buttonValue);
    navigate('/admin/control');
  };

  const handleCloseControlWindow = () => {
    setShowControlWindow(false);
    setCalculateValueWindow(false)
  };

  const handleEditValueSubmit = () => {

    fetch('https://mini-project-mkgl.onrender.com/calculate_value', {
      method: 'PUT',
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('userId')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'recycle_value': earnedPoints
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

    // Do fetch here
    setCalculateValueWindow(false)
    console.log('Recycled amount is:', earnedPoints);
  }
  return (
    <div>
      <Header />
      <section className="bg-primary text-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              PLASTIC WASTE
              <br className="hidden lg:inline-block" /> MANAGER
            </h1>
            <p className="mb-8 leading-relaxed">
              In order to create a plastic-free environment, there is a need to establish a system where people can
              enjoy doing the necessity of Going GREEN. We are here to bring about the change needed.
            </p>
            <div className="flex justify-center">
              {role !== 'store' ? (
                <Link to="/profile">
                  <button className="inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600  rounded text-lg">
                    Get started
                  </button>
                </Link>
              ) : (
                <Link to="/scanner">
                  <button className="inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600  rounded text-lg">
                    Add Product
                  </button>
                </Link>
              )}
              {role === 'admin' && (
                <React.Fragment>
                  <button
                    className="ml-4 items-center inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg"
                    onClick={handleControlClick}
                  >
                    Control
                  </button>
                  <Link to="/admin/register">
                    <button className="ml-4 inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg">
                      Add new
                    </button>
                  </Link>
                </React.Fragment>
              )}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded-xl" alt="hero" src="/images/hero_img.jpg" />
          </div>
        </div>
      </section>

      {showControlWindow && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Admin Control</h2>
            <div className="flex flex-col gap-4">
              <button
                className="bg-red-500 text-white rounded-lg py-2 px-4"
                onClick={handleDeleteAccount}
              >
                Delete Accounts
              </button>
              <button
                className="bg-blue-500 text-white rounded-lg py-2 px-4"
                onClick={handleCalculateValue}
              >
                Calculate Value
              </button>
              <button className="bg-green-500 text-white rounded-lg py-2 px-4" onClick={handleReset}>
                Edit Points
              </button>
              <button
                className="bg-purple-500 text-white rounded-lg py-2 px-4"
                onClick={handleCloseControlWindow}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {calculateValueWindow && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Admin Control</h2>
            <div className="flex flex-col gap-4">
              <input
                type="number"
                className="px-4 py-2 border border-gray-300 rounded-md w-full mb-4"
                placeholder="Enter recycled amount"
                value={earnedPoints}
                onChange={(e) => setEarnedPoints(e.target.value)}
              />
              <button className="bg-green-500 text-white rounded-lg py-2 px-4" onClick={handleEditValueSubmit}>
                Submit
              </button>
              <button
                className="bg-purple-500 text-white rounded-lg py-2 px-4"
                onClick={handleCloseControlWindow}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
