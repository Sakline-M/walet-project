import  { useState } from 'react';
import Income from '../Income/Income';
import Expense from '../Expense/Expense';

const Calculate = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const handleUpdateIncome = (income) => {
    setTotalIncome(income);
  };

  const handleUpdateExpenses = (expenses) => {
    setTotalExpenses(expenses);
  };

  const remainingIncome = totalIncome - totalExpenses;
  const isBudgetOver = remainingIncome < 0;

  return (
    <div>
      <header className="bg-[#BF40BF] text-white p-4 text-center text-xl">
        Budget Tracker
      </header>
      <div className="p-4">
        <Income onUpdateIncome={handleUpdateIncome} />
        <Expense onUpdateExpenses={handleUpdateExpenses} />
        <div className="max-w-md mx-auto mt-4 p-4 bg-white shadow-lg rounded-lg">
          <h3 className={`text-lg font-medium ${isBudgetOver ? 'text-red-500' : 'text-[#BF40BF]'}`}>
            {isBudgetOver ? 'Budget Over: ' : 'Remaining Income: '}
            ${Math.abs(remainingIncome).toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
