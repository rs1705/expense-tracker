import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";
import { useState } from "react";

const INITIAL_ITEMS = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenseItems, setExpenseItems] = useState(INITIAL_ITEMS);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenseItems((prevItems) => {
      return [expense, ...prevItems];
    });
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseItems} />
    </div>
  );
}

export default App;
