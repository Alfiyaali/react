import ExpenseItem  from "./components/ExpenseItem";

function App() {
  const expense = [
    {id: 'e1', expenseName: 'Food', price: 10},
    {id: 'e2',expenseName: 'Petrol', price: 100},
    {id: 'e3',expenseName: 'Movie', price: 200}
  ]
  return (
    <div>
    <h2 className='expense-heading'>Expense Item</h2>
      <ExpenseItem 
      expenseName={expense[0].expenseName} 
      price={expense[0].price}>
      </ExpenseItem>
      
      <ExpenseItem 
      expenseName={expense[1].expenseName} 
      price={expense[1].price}>
      </ExpenseItem>

      <ExpenseItem 
      expenseName={expense[2].expenseName} 
      price={expense[2].price}>
      </ExpenseItem>
    </div>
  );
}

export default App;
