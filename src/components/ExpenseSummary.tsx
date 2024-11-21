import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const ExpenseSummary: React.FC = () => {
  const { expenses, walletBalance } = useContext(ExpenseContext)!;

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="expense-summary">
      <h3>Wallet Balance: ${walletBalance}</h3>
      <h3>Total Expenses: ${totalExpenses}</h3>
    </div>
  );
};

export default ExpenseSummary;
