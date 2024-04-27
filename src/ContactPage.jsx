import React, { useState } from 'react';

const ContactForm = () => {
  const [contactType, setContactType] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowDialog(true);
  };

  return (
    <div className="container mx-auto p-4 border-2 bg-[#b5d685]/25">
      <h1 className="text-xl font-bold text-center mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" required className="mt-1 block w-full rounded-md border-green-300 shadow-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" required className="mt-1 block w-full rounded-md border-green-300 shadow-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="contactType" className="block text-sm font-medium text-gray-700">I am a...</label>
          <select id="contactType" required value={contactType} onChange={(e) => setContactType(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
            <option value="">Select an option</option>
            <option value="partner">Potential Partner</option>
            <option value="user">Potential Customer</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" required className="mt-1 block w-full rounded-md border-green-300 shadow-sm" rows="4"></textarea>
        </div>
        <button type="submit" className="inline-flex justify-center w-full rounded-md border border-green-300 shadow-sm px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm">Submit</button>
      </form>
      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm flex justify-center items-center p-4">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold">Thank you for reaching out!</h2>
            <p className="mb-4">We will get back to you shortly.</p>
            <p>Your selected category: {contactType === 'partner' ? 'Potential Partner' : 'Potential User'}</p>
            <button onClick={() => setShowDialog(false)} className="mt-4 inline-flex justify-center rounded-md border border-green-300 shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:text-sm">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
