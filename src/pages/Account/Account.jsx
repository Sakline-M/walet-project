/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../../components/Header';

const AccountPage = () => {
  return (
    <div>
      <Header />
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-[100px]">
        <div className="flex flex-col md:flex-row items-center md:items-center md:space-x-6">
          <img
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
            src="https://www.shutterstock.com/image-photo/portrait-smiling-young-businessman-standing-260nw-1714927594.jpg"
            alt="User Profile"
          />
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h1 className="text-2xl font-bold text-[#BF40BF]">John Doe</h1>
            <p className="text-[#BF40BF]">California, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
