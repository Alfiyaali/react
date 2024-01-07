import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props){
    const [title, setTitle] = useState(props.title);
    const changeTitle = () =>{
        setTitle('Updated');
        console.log(title);
    };

    const [amount, setAmount] = useState(props.amount);
    const changePrice = () =>{
      setAmount('$100');
      console.log(amount)
    }
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
        <h2>{title}</h2>
        <div className="expense-item_price">{amount}</div>
        <button onClick={deleteExpenseHandler}>Delete Expense</button>
        <button onClick={changeTitle}>Change Title</button>
        <button onClick={changePrice}>Change Price</button>
      </div>
    </Card>
    );
}

export default ExpenseItem;
