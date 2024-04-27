import React, { useState } from 'react';
import axios from 'axios';

const EmailSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/waitlist-signup', {email})
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

      
    console.log('Email submitted:', email);
    // You might want to clear the form or show a success message after submission
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 mt-8">
      <input 
        type="email" 
        placeholder="Enter your email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-2 w-64 border rounded-lg text-gray-700"
        required
      />
      <button 
        type="submit" 
        className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition duration-150 ease-in-out">
        Join Waitlist
      </button>
    </form>
  );
};

export default EmailSignup;
