import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props){
    
    return(
    <Card className="expense-item" id={props.id}>
    <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">{amount}</div>
        <button onClick={deleteExpenseHandler}>Delete Expense</button>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={changePrice}>Change Price</button>
      </div>
    </Card>
    );
}

export default ExpenseItem;
