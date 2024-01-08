import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChange = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChange = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChange = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const formData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(formData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="title">Expense Title</label>
                <input type="text" name="title" id="title" value={enteredTitle} onChange={titleChange} />
                <label htmlFor="amount">Expense Amount</label>
                <input type="number" name="amount" id="amount" value={enteredAmount} onChange={amountChange} />
                <label htmlFor="date">Expense Date</label>
                <input type="date" name="date" id="date" value={enteredDate} onChange={dateChange} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default ExpenseForm;
