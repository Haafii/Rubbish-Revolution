import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-dom-confetti';
import './PointsAnimation.css';

const PointsAnimation = () => {
  const [animate, setAnimate] = useState(false);
  const [pushed, setPushed] = useState(false);
  const navigate = useNavigate();

  const role = localStorage.getItem('role');
  let userQr = JSON.parse(localStorage.getItem('userQr'));
  let productQr = JSON.parse(localStorage.getItem('productQr'));

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    if (animate && role === 'store' && !pushed) {
      const url = 'https://mini-project-mkgl.onrender.com/add_product';

      let msg = productQr;
      let uid1 = userQr;

      const payload = {
        pid: msg,
        uid: uid1[0],
      };

      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('userId')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      };

      fetch(url, options)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          // Process the response data here
          setPushed(true);
          setAnimate(false);
          navigate('/profile');
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle any errors that occurred during the request
        });
    }
  }, [animate, role, pushed, navigate, productQr, userQr]);


  if (role === "user") {
    const url = 'https://mini-project-mkgl.onrender.com/dispose_product';

    const payload = {
      pid : productQr,
    };

    const options = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('userId')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    };

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        navigate('/profile');
        // Process the response data here
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle any errors that occurred during the request
      });
  }

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 5000,
    stagger: 3,
    width: '10px',
    height: '10px',
    perspective: '500px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

  return (
    <div className="main-container bg-primary flex flex-col items-center justify-center min-h-screen">
      <div className="secondary-container h-full items-center justify-center">
        <Confetti active={animate} config={confettiConfig} />
      </div>
    </div>
  );
};

export default PointsAnimation;
