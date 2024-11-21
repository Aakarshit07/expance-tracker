import React, { useContext, useState } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const AddIncomeForm: React.FC = () => {
  const { addIncome } = useContext(ExpenseContext)!;
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount) {
      alert('Please enter an amount.');
      return;
    }
    addIncome(parseFloat(amount));
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-income-form">
      <input
        type="number"
        placeholder="Income Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Income</button>
    </form>
  );
};

export default AddIncomeForm;
