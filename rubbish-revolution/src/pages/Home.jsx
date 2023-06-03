import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Link } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState("");
  const [role, setRule] = useState("")
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
        const result = await response.json();
        setUsername(result.name);
        setRule(result.role)
        const role = result.role;
        localStorage.setItem('role', role);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);
  // console.log(username)

  return (
    <div>
      <Header />
      <section className="bg-primary text-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">PLASTIC WASTE
              <br className="hidden lg:inline-block" /> MANAGER
            </h1>
            <p className="mb-8 leading-relaxed">In order to create a plastic free environment, there is a need to establish a system where people can enjoy doing the necessity of Going GREEN. We are here to bring about the change needed.</p>
            <div className="flex justify-center">
              <Link to={"/profile"}>
                <button className="inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600  rounded text-lg">Get started</button>
              </Link>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">Learn more</button>
              {role == "admin" ?
                <Link to={"/admin/register"}>
                  <button className="ml-4 inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600  rounded text-lg">Add new</button>
                </Link>
                : ""
              }

            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded-xl" alt="hero" src="/images/hero_img.jpg" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
