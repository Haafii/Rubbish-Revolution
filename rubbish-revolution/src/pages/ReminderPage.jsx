import React, { useState } from 'react';

const ReminderPage = () => {
  const remindersArray = ['uranga', 'thinna', 'wew', ' ijj', 'udhue'];

  const [reminders, setReminders] = useState(remindersArray);

  const deleteReminder = (index) => {
    const updatedReminders = [...reminders];
    updatedReminders.splice(index, 1);
    setReminders(updatedReminders);
  };

  return (
    <div className='bg-primary h-screen overflow-y-hidden'>
      <div className="container mx-auto p-4 max-w-lg flex flex-col">
        <h1 className="text-2xl font-bold mb-4 text-white justify-center flex">Reminders</h1>
        {reminders.length === 0 ? (
          <div className="flex justify-center items-center h-screen ">
            <p className="text-white text-center ">Nothing to dispose</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2">
            {reminders.map((reminder, index) => (
              <div
                key={index}
                className="bg-secondary shadow-lg text-white rounded-md p-4 flex items-center justify-between max-w-md"
              >
                <span>{reminder}</span>
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
  );
};

export default ReminderPage;


