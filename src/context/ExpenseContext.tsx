import React, { createContext, useState, ReactNode } from 'react';

interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
}

interface ExpenseContextType {
  walletBalance: number;
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  deleteExpense: (id: string) => void;
  addIncome: (amount: number) => void;
}

export const ExpenseContext = createContext<ExpenseContextType | null>(null);

interface ExpenseProviderProps {
  children: ReactNode;
}

const ExpenseProvider: React.FC<ExpenseProviderProps> = ({ children }) => {
  const [walletBalance, setWalletBalance] = useState<number>(5000);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    if (walletBalance >= expense.amount) {
      setExpenses([...expenses, expense]);
      setWalletBalance(walletBalance - expense.amount);
    } else {
      alert('Insufficient wallet balance!');
    }
  };

  const deleteExpense = (id: string) => {
    const expense = expenses.find((exp) => exp.id === id);
    if (expense) {
      setWalletBalance(walletBalance + expense.amount);
      setExpenses(expenses.filter((exp) => exp.id !== id));
    }
  };

  const addIncome = (amount: number) => {
    setWalletBalance(walletBalance + amount);
  };

  return (
    <ExpenseContext.Provider value={{ walletBalance, expenses, addExpense, deleteExpense, addIncome }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
