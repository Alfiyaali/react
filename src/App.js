import ExpenseItem  from "./components/ExpenseItem";

function App() {
  const expense = [
    {id: 'e1', date: new Date(2023,5,12), expenseName: 'Food', price: 10},
    {id: 'e2',date: new Date(2023,8,30),expenseName: 'Petrol', price: 100},
    {id: 'e3',date: new Date(2023,10,27),expenseName: 'Movie', price: 200}
  ]
  return (
    <div className="container">
    <h2 className='expense-heading'>Expense Item</h2>
      <ExpenseItem 
      date = {expense[0].date}
      expenseName={expense[0].expenseName} 
      price={expense[0].price} />
      
      <ExpenseItem 
      date = {expense[1].date}
      expenseName={expense[1].expenseName} 
      price={expense[1].price} />

      <ExpenseItem 
      date = {expense[2].date}
      expenseName={expense[2].expenseName} 
      price={expense[2].price} />
    </div>
  );
}

export default App;
