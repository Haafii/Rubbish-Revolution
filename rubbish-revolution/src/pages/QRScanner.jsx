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
      navigate('/profile');
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
      <p>{qrData}</p>
      {console.log(qrData)}
    </div>
  );
};

export default QRScanner;





