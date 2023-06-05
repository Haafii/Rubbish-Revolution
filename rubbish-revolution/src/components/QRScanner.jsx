// import React, { useRef, useState } from 'react';
// import { BrowserBarcodeReader } from '@zxing/library';

// const QRScanner = () => {
//   const videoRef = useRef(null);
//   const [qrData, setQRData] = useState('');

//   const startScanner = async () => {
//     const codeReader = new BrowserBarcodeReader();
//     try {
//       const result = await codeReader.decodeOnceFromVideoDevice(undefined, videoRef.current);
//       setQRData(result.text);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={startScanner}>Start Scanner</button>
//       <video ref={videoRef} style={{ width: '100%' }} />
//       <p>{qrData}</p>
//     </div>
//   );
// }

// export default QRScanner;


import React, { useState, useEffect, useRef } from 'react';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';

const QRScanner = () => {
  const [qrData, setQRData] = useState('');
  const [scanned, setScanned] = useState(false);
  const navigate = useNavigate();
  // let productQr = []
  // let userQr = []
  const role = localStorage.getItem('role');
  let productQr = JSON.parse(localStorage.getItem('productQr')) || [];
  // let productQr = localStorage.getItem('productQr');
  // let userQr = localStorage.getItem('userQr');
  let userQr = JSON.parse(localStorage.getItem('userQr')) || [];



  const handleScan = (data) => {
    if (data) {
      setQRData(data.text);
      setScanned(true);
    }
  };
  const handleError = (error) => {
    console.error(error);
  };

  useEffect(() => {
    if (scanned) {
      // Redirect to the profile page
      if (qrData.includes("rubbishrevolutionuser")) {
        userQr.push(qrData)
        // localStorage.setItem('userQr', userQr);
        localStorage.setItem('userQr', JSON.stringify(userQr));
        navigate('/scoreincreased');
      }
      else if (qrData.includes("rubbishrevolutionstore")) {
        navigate('/transaction');
      } else {
        productQr.push(qrData)
        // localStorage.setItem('productQr', productQr);
        localStorage.setItem('productQr', JSON.stringify(productQr));
        navigate('/scanagain')
      }
    }
  }, [scanned, navigate]);

  return (
    <div>
      {!scanned && (
        <QrReader
          delay={300}
          onError={handleError}
          onResult={handleScan}
          style={{ width: '100%' }}
        />
      )}
      {/* {console.log(qrData)} */}
      {console.log("products", productQr)}
      {console.log("user qr ", userQr)}
    </div>
  );
};

export default QRScanner;


// import React, { useState, useEffect } from 'react';
// import { QrReader } from 'react-qr-reader';
// import { useNavigate } from 'react-router-dom';

// const QRScanner = () => {
//   const [qrData, setQRData] = useState('');
//   const [scanned, setScanned] = useState(false);
//   const [camera, setCamera] = useState('user'); // Add this state variable
//   const navigate = useNavigate();

//   const handleScan = (data) => {
//     if (data) {
//       setQRData(data.text);
//       setScanned(true);
//     }
//   };

//   const handleError = (error) => {
//     console.error(error);
//   };

//   const toggleCamera = () => { // Add this function
//     setCamera((prevCamera) => (prevCamera === 'user' ? 'environment' : 'user'));
//   };

//   useEffect(() => {
//     if (scanned) {
//       if (qrData.includes("rubbishrevolution")) {
//         navigate('/scoreincreased');
//       } else {
//         navigate('/scanagain');
//       }
//     }
//   }, [scanned, navigate]);

//   return (
//     <div>
//       {!scanned && (
//         <>
//           <QrReader
//             delay={300}
//             onError={handleError}
//             onResult={handleScan}
//             facingMode={camera} // Add this prop
//             style={{ width: '100%' }}
//           />
//           <div className='flex items-center justify-center '>
//             <button
//               className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               onClick={toggleCamera}> Switch Camera
//             </button>
//           </div>
//         </>
//       )}
//       {console.log(qrData)}
//     </div>
//   );
// };

// export default QRScanner;
