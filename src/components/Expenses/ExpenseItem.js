import React from 'react';
import ExpenseDate from './ExpenseDate';
import DeleteExpense from './DeleteExpense';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props){
    const handleDeleteExpense = () => {
        var list = document.querySelector(".expense-item")
        list.remove();
        console.log('Expense deleted!');
      };
    return(
            <Card className="expense-item">
            <ExpenseDate date={props.date} />
                <div className="expense-item_description">
                    <h2>{props.title}</h2>
                    <div className="expense-item_price">${props.amount}</div>
                    <DeleteExpense onDelete={handleDeleteExpense} />
                </div>
   
            </Card>
    );
}

export default ExpenseItem;
