/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Expense = ({ onUpdateExpenses }) => {
  const [expense, setExpense] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentExpense, setCurrentExpense] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: expenses.length + 1,
      amount: parseFloat(expense)
    };

    if (editing) {
      setExpenses(
        expenses.map((exp) => (exp.id === currentExpense.id ? newExpense : exp))
      );
      setEditing(false);
      setCurrentExpense(null);
    } else {
      setExpenses([...expenses, newExpense]);
    }

    setExpense(0);
    onUpdateExpenses(newExpense.amount);
  };

  const handleEdit = (exp) => {
    setEditing(true);
    setCurrentExpense(exp);
    setExpense(exp.amount);
  };

  const handleDelete = (expenseId) => {
    const updatedExpenses = expenses.filter((exp) => exp.id !== expenseId);
    setExpenses(updatedExpenses);
    onUpdateExpenses(updatedExpenses.reduce((total, exp) => total + exp.amount, 0));
  };

  const totalExpenses = expenses.reduce((total, exp) => total + exp.amount, 0);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="expense" className="block text-sm font-medium text-gray-700">
            Expense
          </label>
          <input
            type="number"
            id="expense"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter expense"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
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
        <h3 className="text-lg font-medium text-[#BF40BF]">Total Expenses: ${totalExpenses.toFixed(2)}</h3>
        <ul className="divide-y divide-gray-200">
          {expenses.map((exp) => (
            <li key={exp.id} className="py-2 flex justify-between items-center">
              <span className="text-sm">${exp.amount.toFixed(2)}</span>
              <div>
                <button
                  onClick={() => handleEdit(exp)}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(exp.id)}
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

export default Expense;
