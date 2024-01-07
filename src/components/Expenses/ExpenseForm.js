import React from 'react'
import './ExpenseForm.css';

function ExpenseForm() {
  return (
    <div>
      <form>
        <label htmlFor="">Expense Title</label>
        <input type="text" name="title" id="title" />
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
