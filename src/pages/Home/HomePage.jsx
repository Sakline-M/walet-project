/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from '../../components/Header';
import { FaTrash, FaEdit } from 'react-icons/fa';

const HomePage = () => {
  const [month, setMonth] = useState('');
  const [incomeSource, setIncomeSource] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [incomeSources, setIncomeSources] = useState([]);
  const [editingIncome, setEditingIncome] = useState(false);
  const [currentIncome, setCurrentIncome] = useState(null);
  const [title, setTitle] = useState('');
  const [budget, setBudget] = useState('');
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  const handleIncomeSubmit = (e) => {
    e.preventDefault();

    if (editingIncome) {
      // Update the existing income
      setIncomeSources(
        incomeSources.map((income) =>
          income.id === currentIncome.id ? { ...income, month, incomeSource, monthlyIncome: parseFloat(monthlyIncome) } : income
        )
      );
      setEditingIncome(false);
      setCurrentIncome(null);
    } else {
      // Add a new income
      const newIncomeSource = {
        id: incomeSources.length + 1,
        month,
        incomeSource,
        monthlyIncome: parseFloat(monthlyIncome),
      };
      setIncomeSources([...incomeSources, newIncomeSource]);
    }

    setMonth('');
    setIncomeSource('');
    setMonthlyIncome('');
  };

  const handleIncomeEdit = (income) => {
    setEditingIncome(true);
    setCurrentIncome(income);
    setMonth(income.month);
    setIncomeSource(income.incomeSource);
    setMonthlyIncome(income.monthlyIncome.toString());
  };

  const handleIncomeDelete = (incomeId) => {
    setIncomeSources(incomeSources.filter((income) => income.id !== incomeId));
  };

  const calculateTotalIncome = () => {
    return incomeSources.reduce((total, income) => total + income.monthlyIncome, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editing) {
      // Update the existing post
      setPosts(
        posts.map((post) =>
          post.id === currentPost.id ? { ...post, title, budget: parseFloat(budget) } : post
        )
      );
      setEditing(false);
      setCurrentPost(null);
    } else {
      // Create a new post
      const newPost = {
        id: posts.length + 1,
        title,
        budget: parseFloat(budget),
      };
      setPosts([...posts, newPost]);
    }

    setTitle('');
    setBudget('');
  };

  const handleEdit = (post) => {
    setEditing(true);
    setCurrentPost(post);
    setTitle(post.title);
    setBudget(post.budget.toString());
  };

  const handleDelete = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const calculateTotalBudget = () => {
    return posts.reduce((total, post) => total + post.budget, 0);
  };

  const remainingIncome = () => {
    const totalBudget = calculateTotalBudget();
    return calculateTotalIncome() - totalBudget;
  };

  const isBudgetShort = remainingIncome() < 0;

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Income Section */}
          <div>
            <form onSubmit={handleIncomeSubmit} className="mb-6">
              <h2 className="text-lg font-medium mb-4 text-[#BF40BF]">Income</h2>
              <div className="mb-4">
                <label htmlFor="month" className="block text-sm font-medium text-gray-700">
                  Month
                </label>
                <input
                  type="text"
                  id="month"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter month"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="incomeSource" className="block text-sm font-medium text-gray-700">
                  Source of Income
                </label>
                <input
                  type="text"
                  id="incomeSource"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter source of income"
                  value={incomeSource}
                  onChange={(e) => setIncomeSource(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="monthlyIncome" className="block text-sm font-medium text-gray-700">
                  Monthly Income
                </label>
                <input
                  type="number"
                  id="monthlyIncome"
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
                {editingIncome ? 'Update Income' : 'Add Income'}
              </button>
            </form>

            {incomeSources.length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-medium mb-2 text-[#BF40BF]">Your Incomes</h2>
                <ul className="divide-y divide-gray-200">
                  {incomeSources.map((income) => (
                    <li key={income.id} className="py-2 flex justify-between items-center">
                      <div>
                        <span className="text-sm">{income.month}</span>
                        <span className="text-sm text-gray-600 ml-2">{income.incomeSource}</span>
                        <span className="text-sm text-gray-600 ml-2">${income.monthlyIncome.toFixed(2)}</span>
                      </div>
                      <div>
                        <button
                          onClick={() => handleIncomeEdit(income)}
                          className="text-[#BF40BF] hover:text-[#eb99eb] mr-2"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleIncomeDelete(income.id)}
                          className="text-black hover:text-[#BF40BF]"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-[#BF40BF]">Total Income: ${calculateTotalIncome().toFixed(2)}</h3>
                </div>
              </div>
            )}
          </div>

          {/* Expense Section */}
          <div>
            <form onSubmit={handleSubmit}>
              <h2 className="text-lg font-medium mb-4 text-[#BF40BF]">Expense</h2>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                  Budget
                </label>
                <input
                  type="number"
                  id="budget"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
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

            {posts.length > 0 && (
              <div className="mt-4">
                <h2 className="text-lg font-medium mb-2 text-[#BF40BF]">Your Budget</h2>
                <ul className="divide-y divide-gray-200">
                  {posts.map((post) => (
                    <li key={post.id} className="py-2 flex justify-between items-center">
                      <div>
                        <span className="text-sm">{post.title}</span>
                        <span className="text-sm text-gray-600 ml-2">${post.budget.toFixed(2)}</span>
                      </div>
                      <div>
                        <button
                          onClick={() => handleEdit(post)}
                          className="text-[#BF40BF] hover:text-[#eb99eb] mr-2"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="text-black hover:text-[#BF40BF]"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-[#BF40BF]">Total Budget: ${calculateTotalBudget().toFixed(2)}</h3>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Calculation Section */}
        <div className="mt-6 flex justify-center">
          <h3 className={`text-lg font-medium ${isBudgetShort ? 'text-red-500' : 'text-black'}`}>
            {isBudgetShort ? 'Budget Short: ' : 'Remaining Income: '}
            ${Math.abs(remainingIncome()).toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
