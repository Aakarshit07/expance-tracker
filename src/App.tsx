import ExpenseProvider from './context/ExpenseContext';
import Header from './components/Header';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseTrends from './components/ExpenseTrends';
import AddExpenseForm from './components/AddExpenseForm';
import AddIncomeForm from './components/AddIncomeForm';

function App() {
  return (
    <ExpenseProvider>
      <div className="App">
        {/* Header Component */}
        <Header />

        {/* Main Content */}
        <div className="main-container">
          {/* Wallet Balance and Add Income */}
          <div className="wallet-section">
            <AddIncomeForm />
          </div>

          {/* Expenses Summary and Trends */}
          <div className="summary-section">
            <ExpenseSummary />
            <ExpenseTrends />
          </div>

          {/* Add Expense Form */}
          <AddExpenseForm />

          {/* Expense List */}
          <ExpenseList />
        </div>
      </div>
    </ExpenseProvider>
  );
}

export default App;
