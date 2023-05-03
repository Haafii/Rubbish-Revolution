import React from 'react'
import Header from '../components/Header'

function Home() {
  return (
    <div>
      <Header />
      <section className="bg-primary text-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">PLASTIC WASTE 
              <br className="hidden lg:inline-block"/> MANAGER
            </h1>
            <p className="mb-8 leading-relaxed">In order to create a plastic free environment, there is a need to establish a system where people can enjoy doing the necessity of Going GREEN. We are here to bring about the change needed.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600  rounded text-lg">Get started</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">Learn more</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded-xl" alt="hero" src="/images/hero_img.jpg"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
