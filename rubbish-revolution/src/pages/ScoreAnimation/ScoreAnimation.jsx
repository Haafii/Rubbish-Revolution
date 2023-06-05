// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Confetti from 'react-dom-confetti';
// import './PointsAnimation.css';

// const PointsAnimation = () => {
//   const [animate, setAnimate] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (animate) {
//       setTimeout(() => {
//         setAnimate(false);
//         navigate('/profile'); // Navigate to the profile page
//       }, 1000);
//     }
//   }, [animate, navigate]);

//   const confettiConfig = {
//     angle: 90,
//     spread: 360,
//     startVelocity: 40,
//     elementCount: 70,
//     dragFriction: 0.12,
//     duration: 3000,
//     stagger: 3,
//     width: '10px',
//     height: '10px',
//     perspective: '500px',
//     colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
//   };

//   useEffect(() => {
//     setAnimate(true);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <div className="flex items-center justify-center h-full">
//         <Confetti active={animate} config={confettiConfig} />
//       </div>
//     </div>
//   );
// };

// export default PointsAnimation;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-dom-confetti';
import './PointsAnimation.css';

const PointsAnimation = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const role = localStorage.getItem('role');
  let userQr = JSON.parse(localStorage.getItem('userQr'));
  let productQr = JSON.parse(localStorage.getItem('productQr'));

  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        setAnimate(false);
        navigate('/profile'); // Navigate to the profile page
      }, 3000); // Change the timeout duration to 3000 milliseconds (3 seconds)
    }
  }, [animate, navigate]);

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

  useEffect(() => {
    setAnimate(true);
  }, []);

  const userId = localStorage.getItem('userId');


  if (role == "store") {
    for (const product of productQr) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `bearer ${userId}`);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({ pid: product, uid: userQr[0] }),
        redirect: 'follow'
      };

      fetch("https://mini-project-mkgl.onrender.com/add_product", requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result)
        })
        .catch(error => console.log('error', error));
    }
  }

  return (
    <div className="main-container bg-primary flex flex-col items-center justify-center min-h-screen">
      {console.log("products:", productQr)}
      <div className="secondary-container h-full items-center justify-center">
        <Confetti active={animate} config={confettiConfig} />
      </div>
    </div>
  );
};

export default PointsAnimation;
