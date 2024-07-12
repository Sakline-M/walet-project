/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Income = ({ onUpdateIncome }) => {
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [incomes, setIncomes] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentIncome, setCurrentIncome] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIncome = {
      id: incomes.length + 1,
      amount: parseFloat(monthlyIncome)
    };

    if (editing) {
      setIncomes(
        incomes.map((income) => (income.id === currentIncome.id ? newIncome : income))
      );
      setEditing(false);
      setCurrentIncome(null);
    } else {
      setIncomes([...incomes, newIncome]);
    }

    setMonthlyIncome(0);
    onUpdateIncome(newIncome.amount);
  };

  const handleEdit = (income) => {
    setEditing(true);
    setCurrentIncome(income);
    setMonthlyIncome(income.amount);
  };

  const handleDelete = (incomeId) => {
    const updatedIncomes = incomes.filter((income) => income.id !== incomeId);
    setIncomes(updatedIncomes);
    onUpdateIncome(updatedIncomes.reduce((total, income) => total + income.amount, 0));
  };

  const totalIncome = incomes.reduce((total, income) => total + income.amount, 0);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="income" className="block text-sm font-medium text-gray-700">
            Monthly Income
          </label>
          <input
            type="number"
            id="income"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter monthly income"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#BF40BF] text-white py-2 px-4 rounded-md hover:bg-[#e983e9] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {editing ? 'Update' : 'Submit'}
        </button>
      </form>
      <div className="mt-4">
        <h3 className="text-lg font-medium text-[#BF40BF]">Total Income: ${totalIncome.toFixed(2)}</h3>
        <ul className="divide-y divide-gray-200">
          {incomes.map((income) => (
            <li key={income.id} className="py-2 flex justify-between items-center">
              <span className="text-sm">${income.amount.toFixed(2)}</span>
              <div>
                <button
                  onClick={() => handleEdit(income)}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(income.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Income;
