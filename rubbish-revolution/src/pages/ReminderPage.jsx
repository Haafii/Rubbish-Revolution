import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';

const ReminderPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const deleteReminder = (index) => {
    navigate('/scanner')
    // const updatedReminders = [...remindersArray];
    // updatedReminders.splice(index, 1);
    // setReminders(updatedReminders);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://mini-project-mkgl.onrender.com/reminder', {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('userId')}`,
          }
        });

        if (!response.ok) {
          throw new Error('Request failed');
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const remindersArray = data.map(obj => ({ id: obj.id, date: obj.date }));
  console.log(remindersArray);
  console.log(data);
  return (
    <>
      <Header />
      <div className='bg-primary h-screen overflow-y-hidden'>
        <div className="container mx-auto p-4 max-w-lg flex flex-col">
          <h1 className="text-2xl font-bold mb-4 text-white justify-center flex">Reminders</h1>
          {data[0] === "No products to dispose" ? (
            <div className="flex justify-center items-center h-screen ">
              <p className="text-white text-center ">Nothing to dispose</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-2">
              {remindersArray.map((reminder, index) => (
                <div
                  key={index}
                  className="bg-secondary shadow-lg text-white rounded-md p-4 flex items-center justify-between max-w-md"
                >
                  <div>
                    <span>{"plastic waste " + reminder.id}</span>
                    <p className="text-gray-400 mt-2">Date: {reminder.date}</p>
                  </div>
                  <button
                    className="px-2 py-1 bg-green-500 text-white font-bold rounded-md"
                    onClick={() => deleteReminder(index)}
                  >
                    Dispose
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ReminderPage;
