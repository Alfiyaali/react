import React from 'react'
import './DeleteExpense.css';
import ExpenseItem from './ExpenseItem';

function DeleteExpense({ onDelete }) {
    const handleDelete = () => {
        if (onDelete) {
          onDelete();
        }
      };
  return (
    <ExpenseItem>
      <button className='delete-expense' onClick={handleDelete}>Delete Expense</button>
    </ExpenseItem>
  )
}

export default DeleteExpense
