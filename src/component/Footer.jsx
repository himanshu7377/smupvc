import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-start md:space-x-8 space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h3 className="text-3xl text-center font-bold mb-4">Contact Us</h3>
          <form className="flex flex-col space-y-4">
            <label htmlFor="name" className="mb-2">Name</label>
            <input type="text" id="name" className="p-2 rounded-md text-gray-800" />

            <label htmlFor="phone" className="mb-2">Phone</label>
            <input type="number" id="phone" className="p-2 rounded-md text-gray-800" />
            
            <label htmlFor="message" className="mb-2">Message</label>
            <textarea id="message" className="p-2 rounded-md text-gray-800"></textarea>
            <button type="submit" className="bg-teal-500 text-white p-2 rounded-md">Send</button>
          </form>
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          <div className="text-center flex-1">
            <h3 className="text-3xl font-bold mb-4">Company Address</h3>
            <p className="mb-2">[Your Company Name]</p>
            <p className="mb-2">1234 Your Street, Suite 567</p>
            <p className="mb-2">City, State, Zip Code</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p className="mb-2">Email: info@yourcompany.com</p>
            <p className="mt-4">&copy; 2024 Your Company Name. All rights reserved.</p>
          </div>
          <div className="text-center flex-1">
            <h3 className="text-3xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-teal-400 hover:underline">Home</a></li>
              <li><a href="#" className="text-teal-400 hover:underline">About Us</a></li>
              <li><a href="#" className="text-teal-400 hover:underline">Services</a></li>
              <li><a href="#" className="text-teal-400 hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="text-center flex-1">
            <h3 className="text-3xl font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-teal-400 hover:underline">Facebook</a></li>
              <li><a href="#" className="text-teal-400 hover:underline">Twitter</a></li>
              <li><a href="#" className="text-teal-400 hover:underline">LinkedIn</a></li>
              <li><a href="#" className="text-teal-400 hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
