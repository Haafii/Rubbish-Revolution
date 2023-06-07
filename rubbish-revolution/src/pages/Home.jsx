// import React, { useState, useEffect } from 'react'
// import Header from '../components/Header'
// import { Link } from "react-router-dom";

// function Home() {
//   const [username, setUsername] = useState("");
//   const [role, setRule] = useState("")
//   // Retrieve the user ID from local storage
//   const userId = localStorage.getItem('userId');

//   var myHeaders = new Headers();
//   myHeaders.append("Authorization", `bearer ${userId}`);

//   var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://mini-project-mkgl.onrender.com/users/me/", requestOptions);
//         const result = await response.json();
//         setUsername(result.name);
//         setRule(result.role)
//         const role = result.role;
//         localStorage.setItem('role', role);
//       } catch (error) {
//         console.log('error', error);
//       }
//     };

//     fetchData();
//   }, []);
//   // console.log(username)

//   return (
//     <div>
//       <Header />
//       <section className="bg-primary text-white body-font">
//         <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//           <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//             <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">PLASTIC WASTE
//               <br className="hidden lg:inline-block" /> MANAGER
//             </h1>
//             <p className="mb-8 leading-relaxed">In order to create a plastic free environment, there is a need to establish a system where people can enjoy doing the necessity of Going GREEN. We are here to bring about the change needed.</p>
//             <div className="flex justify-center">
//               {role != "store" ?
//                 <Link to={"/profile"}>
//                   <button className="inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600  rounded text-lg">Get started</button>
//                 </Link>
//                 :
//                 <Link to={"/scanner"}>
//                   <button className="inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600  rounded text-lg">Add Product</button>
//                 </Link>
//               }
//               {role === "admin" && (
//                 <React.Fragment>
//                   <Link to="">
//                     <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">Control</button>
//                   </Link>
//                   <Link to="/admin/register">
//                     <button className="ml-4 inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg">Add new</button>
//                   </Link>
//                 </React.Fragment>
//               )}
//             </div>
//           </div>
//           <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//             <img className="object-cover object-center rounded-xl" alt="hero" src="/images/hero_img.jpg" />
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Home
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [showControlWindow, setShowControlWindow] = useState(false);
  const [buttonValue, setButtonValue] = useState("")

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
    // Perform delete account action
    setButtonValue("delete")
    localStorage.setItem('admincontrolbuttonvalue', buttonValue);
    navigate('/admin/control');
  };

  const handleCalculateValue = () => {
    // Perform calculate value action
    setButtonValue("calculate")
    localStorage.setItem('admincontrolbuttonvalue', buttonValue);
    navigate('/admin/control');
    window.location.href = '';
  };

  const handleReset = () => {
    // Perform reset action
    setButtonValue("reset")
    localStorage.setItem('admincontrolbuttonvalue', buttonValue);
    navigate('/admin/control');
  };

  const handleCloseControlWindow = () => {
    setShowControlWindow(false);
  };
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
                    className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg"
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
                Delete Account
              </button>
              <button
                className="bg-blue-500 text-white rounded-lg py-2 px-4"
                onClick={handleCalculateValue}
              >
                Calculate Value
              </button>
              <button className="bg-green-500 text-white rounded-lg py-2 px-4" onClick={handleReset}>
                Reset
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
