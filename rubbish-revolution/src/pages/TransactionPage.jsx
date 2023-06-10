import React, {useState} from 'react';

const TransactionPage = () => {
  const [error,setError ] = useState("Insufficient Balance")
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
                    id="amount"
                    type="text"
                    placeholder="Enter the amount"
                    className="px-4 py-2 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md bg-gray-100 text-black mt-2"
                  />
                {error && <div className='text-red-600 text-lg font-bold'>{error}</div>}
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    className="flex justify-center items-center w-full white px-4 py-3 rounded-md focus:outline-none bg-sky-500  hover:bg-sky-600  transition duration-200 ease-in"
                  >
                    Pay
                  </button>
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
