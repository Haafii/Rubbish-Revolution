import React, { useEffect, useState } from 'react'
import Header from "../components/Header";

function Profile() {
  const [username, setUsername] = useState("");
  const [qrData, setQrData] = useState("");
  const [point, setPoint] = useState();
  const [money, setMoney] = useState();
  // Retrieve the user ID from local storage
  const userId = localStorage.getItem('userId');

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `bearer ${userId}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://mini-project-mkgl.onrender.com/users/me/", requestOptions);
        const qr = await fetch("https://mini-project-mkgl.onrender.com/qr_gen", requestOptions)
        const result = await response.json();
        const qrResult = await qr.json();
        // console.log(qrResult);
        // console.log(result);
        setUsername(result.name);
        localStorage.setItem('username', result.name);
        setMoney(result.money)
        localStorage.setItem('money', result.money);
        setPoint(result.points);
        setQrData("data:image/png;base64," + qrResult.qrdata)
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  // console.log(qrData)
  return (
    <div>
      <Header />
      <main className="profile-page">
        <section className="relative block" style={{ height: "400px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className=" relative py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="bg-primary relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="images/profile.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      {/* <button
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Connect
                      </button> */}
                      <img alt="Embedded Image" src={qrData} />

                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="text-white flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide ">
                          Points
                        </span>
                        <span className="text-sm ">Ranking  </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide ">
                          {point}
                        </span>
                        <span className="text-sm">Points</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide ">
                          {money}
                        </span>
                        <span className="text-sm ">Money</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-white text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal   mb-2">
                    {username}
                  </h3>
                  {/* <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Los Angeles, California
                  </div> */}
                  {/* <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    Solution Manager - Creative Tim Officer
                  </div> */}
                  {/* <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    University of Computer Science
                  </div> */}
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-white">
                        If you have a larger dataset with many thousands or millions of rows, generating the graphs may take longer, but it should still be within a few seconds or minutes depending on the complexity of the graph and the processing power of your computer
                      </p>
                      <a
                        href="#"
                        className="font-normal text-sky-500"
                        onClick={e => e.preventDefault()}
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Profile