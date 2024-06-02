import React, { useState } from 'react';
import { useForm } from '@formspree/react';

const Footer = () => {
  const [state, handleSubmit] = useForm("mwkgdord");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const handleFormSubmit = async (event) => {
    await handleSubmit(event);
    // Clear form fields after submission
    event.target.reset();

     // Show success message
     setShowSuccessMessage(true);
     // Hide success message after 3 seconds
     setTimeout(() => {
       setShowSuccessMessage(false);
     }, 3000);
  };
  return (
    <footer className="bg-gray-800 mt-3 text-white py-4" id='contact'>
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-start md:space-x-8 space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h3 className="text-3xl text-center font-bold ">Contact Us</h3>
          <form onSubmit={handleFormSubmit} className="flex flex-col space-y-3" action="https://formspree.io/f/mwkgdord" method="POST">
            <label htmlFor="name" className="mb-2">Name</label>
            <input type="text" id="name" name="name" className="p-2 rounded-md text-gray-800" />

            <label htmlFor="email" className="mb-2">Email</label>
            <input type="email" id="email" name="email" className="p-2 rounded-md text-gray-800" />

            <label htmlFor="phone" className="mb-2">Phone</label>
            <input type="phone" id="phone" name="phone" className="p-2 rounded-md text-gray-800" />
            
            <label htmlFor="message" className="mb-2">Message</label>
            <textarea id="message" name="message" className="p-2 rounded-md text-gray-800"></textarea>
            <button type="submit" className="bg-teal-500 text-white p-2 rounded-md">Send</button>
            {state.errors && (
              <div className="text-red-500">
                {state.errors.map(error => (
                  <div key={error.field}>{error.message}</div>
                ))}
              </div>
            )}
            {showSuccessMessage && (
              <div className="text-green-500">Thanks for reaching out!</div>
            )}
          </form>
        </div>
        <div className="w-full md:w-1/2 flex flex-col pt-20 md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          <div className="text-center flex-1">
            <h3 className="text-3xl font-bold mb-4"> Address</h3>
            <p className="mb-2">S.M UPVC and Glass Decor </p>
            <p className="mb-2">Site No.5 To 7, 1st Cross,Margondanahalli Village</p>
            <p className="mb-2">K.R.Puram, Bengaluru,560036</p>
            <p className="mb-2">Phone: 8660656066/7023629211</p>
            <p className="mb-2">Email: andglassdecorsmupvc@gmail.com</p>
            <p className="mt-4">&copy; 2024 S.M UPVC and Glass Decor. All rights reserved.</p>
          </div>
          <div className="text-center flex-1">
            <h3 className="text-3xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-8">
              <li><a href="#home" className="text-teal-400 hover:underline">Home</a></li>
              <li><a href="#about" className="text-teal-400 hover:underline">About Us</a></li>
              <li><a href="#services" className="text-teal-400 hover:underline">Services</a></li>
              <li><a href="#contact" className="text-teal-400 hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="text-center flex-1">
            <h3 className="text-3xl font-bold mb-4">Follow Us</h3>
            <ul className="space-y-8">
              <li><p  className="text-teal-400 hover:underline">Facebook</p></li>
              <li><p  className="text-teal-400 hover:underline">Twitter</p></li>
              <li><p  className="text-teal-400 hover:underline">LinkedIn</p></li>
              <li><p  className="text-teal-400 hover:underline">Instagram</p></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
