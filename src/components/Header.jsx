/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">$RainCash</Link> 
        <nav className="flex items-center">
          <ul className="flex space-x-4 ">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
          <Link to="/profile" className="ml-4">
            <img
              src="https://img.freepik.com/free-photo/portrait-cute-smiling-boy-cafe_23-2148436234.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1719187200&semt=ais_user"
              alt="User Profile"
              className="w-8 h-8 rounded-full border-2 border-white "
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
