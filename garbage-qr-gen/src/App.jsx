import { useState } from 'react'



function App() {

  const [qrData, setQrData] = useState("");
  const handleGenerateClick = () => {
    // Add your generate button logic here
    fetch('https://mini-project-mkgl.onrender.com/garbage', {
      method: 'GET',
      headers: {
        'accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setQrData("data:image/png;base64," + data.qrdata)
        // Handle the response data here
      })
      .catch(error => {
        console.log(error);
        // Handle any errors that occurred during the request
      });

    console.log('Generate button clicked');
  };

  return (
    <div className="flex flex-col items-center">
      {/* <img src="path_to_your_image.jpg" alt="Your Image" className="w-64 h-64 mb-4" /> */}
      <img alt="" src={qrData} />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleGenerateClick}>Generate</button>
    </div>
  );
}
export default App


