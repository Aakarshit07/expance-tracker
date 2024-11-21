import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const ExpenseList: React.FC = () => {
  const { expenses, deleteExpense } = useContext(ExpenseContext)!;

  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <div key={expense.id} className="expense-item">
          <h3>{expense.title}</h3>
          <p>${expense.amount}</p>
          <p>{expense.category}</p>
          <p>{expense.date}</p>
          <button onClick={() => deleteExpense(expense.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
