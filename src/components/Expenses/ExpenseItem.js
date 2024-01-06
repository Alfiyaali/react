import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props){
    const deleteExpenseHandler = () => {
        // DOM manipulation to remove the expense item
        const expenseItemElement = document.querySelector('.expense-item');

        // Remove the parent element from the DOM
        expenseItemElement.remove();
      };
    
    return(
    <Card className="expense-item" id={props.id}>
    <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
        <button onClick={deleteExpenseHandler}>Delete Expense</button>
      </div>
    </Card>
    );
}

export default ExpenseItem;
