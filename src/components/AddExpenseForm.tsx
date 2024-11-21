import React, { useContext, useState } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const AddExpenseForm: React.FC = () => {
  const { addExpense } = useContext(ExpenseContext)!;
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount || !category || !date) {
      alert('Please fill out all fields.');
      return;
    }
    addExpense({
      id: Date.now().toString(),
      title,
      amount: parseFloat(amount),
      category,
      date,
    });
    setTitle('');
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-expense-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;
