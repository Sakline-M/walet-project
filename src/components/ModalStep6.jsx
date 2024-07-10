/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ModalStep6 = ({ onSelect, nextStep, progress, step, selectedOptions }) => {
  const options = ['Music','TV streaming','Fitness','Online courses','Audio or ebooks','News','Meal delivery'];

  const handleOptionClick = (option) => {
    onSelect('option1', option);
  };

  return (
    <div className="fixed inset-0  bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-primary rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="relative pt-1 mb-4">

          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-secondary">
            <div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#BF40BF]"
            ></div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-[#BF40BF]">Which of these subscription do you have?</h2>
        {options.map(option => (
          <button
            key={option}
            className={`py-2 px-4 rounded mb-2 w-full border border-[#BF40BF] ${selectedOptions.includes(option) ? 'bg-accent2' : 'bg-accent1'} text-black`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
        <button
          className="bg-[#BF40BF] text-white py-2 px-4 rounded w-full mt-4 "
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ModalStep6;
