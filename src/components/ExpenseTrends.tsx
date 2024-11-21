import React, { useContext } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { ExpenseContext } from '../context/ExpenseContext';

const ExpenseTrends: React.FC = () => {
  const { expenses } = useContext(ExpenseContext)!;

  const data = expenses.reduce((acc, expense) => {
    const existingCategory = acc.find((item) => item.name === expense.category);
    if (existingCategory) {
      existingCategory.value += expense.amount;
    } else {
      acc.push({ name: expense.category, value: expense.amount });
    }
    return acc;
  }, [] as { name: string; value: number }[]);

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default ExpenseTrends;
