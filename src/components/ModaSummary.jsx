/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ModalSummary = ({ selectedOptions, updateOptions, progress, step }) => {
  const [options, setOptions] = useState(selectedOptions);

  const handleEdit = (key, index, value) => {
    const newOptions = { ...options };
    newOptions[key][index] = value;
    setOptions(newOptions);
    updateOptions(newOptions);
  };

  const handleDelete = (key, index) => {
    const newOptions = { ...options };
    newOptions[key].splice(index, 1);
    setOptions(newOptions);
    updateOptions(newOptions);
  };

  return (
    <div className="bg-primary p-3 rounded-lg shadow-lg text-center w-full max-w-md">
      <div className="relative pt-1 mb-4">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-secondary">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-accent1"
          ></div>
        </div>
      </div>
      <h2 className="text-2xl text-black font-semibold mb-4">Summary of Selected Options:</h2>
      {Object.keys(options).length === 0 ? (
        <p>No options selected.</p>
      ) : (
        Object.entries(options).map(([key, values]) => (
          values.map((value, index) => (
            <div key={`${key}-${index}`} className="mb-2 flex flex-row sm:flex-row justify-between items-center">
              <input
                type="text"
                className="border border-secondary text-black p-1 rounded w-auto sm:w-[800px]"
                value={value}
                onChange={(e) => handleEdit(key, index, e.target.value)}
              />
              <button
                className="border border-accent2 text-accent2 py-1 px-6 rounded mt-2 sm:mt-0 sm:ml-2 w-auto sm:w-auto text-black"
                onClick={() => handleDelete(key, index)}
              >
                Delete
              </button>
            </div>
          ))
        ))
      )}
    </div>
  );
};

export default ModalSummary;
