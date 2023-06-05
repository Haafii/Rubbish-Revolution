import React, { useState } from 'react';

const ReminderPage = () => {
    const remindersArray = ['uranga', 'thinna']
  
    const [reminders, setReminders] = useState(remindersArray);

  
    const deleteReminder = (index) => {
      const updatedReminders = [...reminders];
      updatedReminders.splice(index, 1);
      setReminders(updatedReminders);
    };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Reminders</h1>

      <ul className="mt-4">
        {reminders.map((reminder, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-2 border-b border-gray-200"
          >
            <span>{reminder}</span>
            <button
              className="px-2 py-1 bg-red-500 text-white font-bold"
              onClick={() => deleteReminder(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReminderPage;
