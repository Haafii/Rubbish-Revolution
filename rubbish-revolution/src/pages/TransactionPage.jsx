import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


const TransactionPage = () => {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [money, setMoney] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const balance = localStorage.getItem('money');
  const storeqr = localStorage.getItem('storeqr');
  console.log(storeqr);
  console.log(balance);
  console.log(money);
  const handlePayment = () => {
    setIsLoading(true);
    fetch('https://mini-project-mkgl.onrender.com/redeem', {
      method: 'PUT',
      headers: {
        'accept': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('userId')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "uid": storeqr,
        "money": money
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data === "Success") {
          setError("")
          navigate("/paymentdone")
        } else {

          setError(data)
        }
        setMoney("")
        setIsLoading(false);
        // Handle the response data
      })
      .catch(error => {
        console.error(error);
        setError("Transaction failed. Please try again.")
        setIsLoading(false);
        // Handle any errors
      });

  }
  return (
    <div className="min-h-screen bg-primary py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-secondary mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-sky-500 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">
                $
              </div>
              <div className="block pl-2 font-semibold text-xl self-start text-white">
                <h2 className="leading-relaxed">Redeem Your Point</h2>
                <p className="text-sm text-white font-normal leading-relaxed">
                  Welcome to the money entering page in RR.
                </p>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-white sm:text-lg sm:leading-7">
                <div className="flex flex-col justify-center items-center">
                  <label htmlFor="amount" className="leading-loose">
                    Amount
                  </label>
                  <input
                    onChange={(e) => { setMoney(e.target.value), setError(null) }}
                    id="amount"
                    type="text"
                    placeholder="Enter the amount"
                    value={money}
                    className="px-4 py-2 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md bg-gray-100 text-black mt-2"
                  />
                  {error && <div className='text-red-600 text-lg font-bold'>{error}</div>}
                </div>
                <div className="flex flex-col items-center gap-4">
                  <button
                    className="flex justify-center items-center w-full white px-4 py-3 rounded-md focus:outline-none bg-sky-500  hover:bg-sky-600  transition duration-200 ease-in"
                    onClick={handlePayment}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mx-auto"></div> // Loading spinner
                    ) : (
                      'Pay'
                    )}

                  </button>
                  <Link to={"/home"} className='w-full'>
                    <button
                      className="flex justify-center items-center w-full white px-4 py-3 rounded-md focus:outline-none bg-gray-500  hover:bg-gray-600  transition duration-200 ease-in"
                    >
                      Go To Home
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
