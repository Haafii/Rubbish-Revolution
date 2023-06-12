import { BrowserBarcodeReader } from '@zxing/library';
import React, { useState, useEffect, useRef } from 'react';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';

const QRScanner = () => {
  const [qrData, setQRData] = useState('');
  const [scanned, setScanned] = useState(false);
  const [status, setStatus] = useState('');
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  let productQr = JSON.parse(localStorage.getItem('productQr')) || [];
  let userQr = JSON.parse(localStorage.getItem('userQr')) || [];
  let garbageQr = JSON.parse(localStorage.getItem('garbageQr')) || [];

  const videoRef = useRef(null); // Define videoRef using useRef

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
      if (qrData.includes('rubbishrevolutionuser')) {
        userQr.push(qrData);
        localStorage.setItem('userQr', JSON.stringify(userQr));
        navigate('/scoreincreased');
      } else if (qrData.includes('rubbishrevolutionstore')) {
        localStorage.setItem('storeqr', qrData);
        navigate('/transaction');
      } else if (qrData.includes('rubbishgarbage')) {
        if (garbageQr.length > 0) {
          garbageQr.shift(); // Remove the first entry from the array
        }
        garbageQr.unshift(qrData); // Add the new value at index 0 of the array
        localStorage.setItem('garbageQr', JSON.stringify(garbageQr));
        const url = 'https://mini-project-mkgl.onrender.com/garbage_validation';
        const payload = {
          gid: garbageQr[0],
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
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setStatus(data.status);
            localStorage.setItem('status', data.status);
            navigate('/garbagecheck');
            // Process the response data here
          })
          .catch((error) => {
            console.error('Error:', error);
            // Handle any errors that occurred during the request
          });
      } else {
        productQr.push(qrData);
        localStorage.setItem('productQr', JSON.stringify(productQr));
        navigate('/scanagain');
      }
    }
  }, [scanned, navigate]);

  useEffect(() => {
    const codeReader = new BrowserBarcodeReader();

    const startBarcodeScanner = async () => {
      try {
        const devices = await codeReader.getVideoInputDevices();
        const selectedDeviceId = devices[0].deviceId;
        const videoElement = videoRef.current;

        if (videoElement) {
          codeReader.decodeFromVideoDevice(selectedDeviceId, videoElement, (result, error) => {
            if (result) {
              setQRData(result.text);
              setScanned(true);
            } else if (error) {
              // console.error('Barcode scanning error:', error);
            }
          });
        }
      } catch (error) {
        console.error('Error starting barcode scanner:', error);
      }
    };

    startBarcodeScanner();

    return () => {
      codeReader.reset();
    };
  }, []);

  return (
    <div className='overflow-hidden h-screen'>
      {/* style={{ width: '100%' }} */}
      {!scanned && (
        <>
          <QrReader delay={300}  onError={handleError}  onResult={handleScan}  videoStyle={{ width: '100%', height: 'auto', border: '5px solid blue' ,padding:'10px' }} constraints={ {facingMode: 'environment'}} />
          <video ref={videoRef} style={{ display: 'none' }}></video>
        </>
      )}
      {console.log('qrData:', qrData)}
      {console.log('products:', productQr)}
      {console.log('user qr:', userQr)}
      {console.log('garbage Qr:', garbageQr)}
      {console.log('status:', status)}
    </div>
  );
};

export default QRScanner;

