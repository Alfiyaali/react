import React from "react";
import './index.css';
import Expenses from "./components/Expenses/Expenses";
function App() {
  const expense = [
    {id: 'e1', date: new Date(2023,5,12), title: 'Food', amount: 10},
    {id: 'e2',date: new Date(2023,8,30),title: 'Petrol', amount: 100},
    {id: 'e3',date: new Date(2023,10,27),title: 'Movie', amount: 200}
  ]

  return (
    <div>
      <h2>Expense Tracker</h2>
      <Expenses items={expense}/>
    </div>
  );
}

export default App;
