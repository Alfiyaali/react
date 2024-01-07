import React from 'react'
import './ExpenseForm.css';

const ExpenseForm = () => {
    const formSubmit = (event) =>{
        console.log(event.target.value)
    };
  return (
    <div>
      <form>
        <label htmlFor="">Expense Title</label>
        <input type="text" name="title" id="title" onChange={formSubmit} />
        <label htmlFor="">Expense Amount</label>
        <input type="number" name="amount" id="amount" />
        <label htmlFor="">Expense Date</label>
        <input type="date" name="date" id="date" />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ExpenseForm
