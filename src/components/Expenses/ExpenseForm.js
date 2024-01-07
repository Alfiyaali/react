import React, {useState} from 'react'
import './ExpenseForm.css';

const ExpenseForm = () => {
        const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });
    const titleChange = (event) =>{
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        setUserInput((prevState) =>{
            return {...prevState, enteredTitle:event.target.value};
        });
    };
    const amountChange = (event) =>{
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })

        setUserInput((prevState) =>{
            return {...prevState, enteredAmount:event.target.value};
        });
    };
    const dateChange = (event) =>{
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
        setUserInput((prevState) =>{
            return {...prevState, enteredDate:event.target.value};
        });
        
    };
  return (
    <div>
      <form>
        <label htmlFor="">Expense Title</label>
        <input type="text" name="title" id="title" onChange={titleChange} />
        <label htmlFor="">Expense Amount</label>
        <input type="number" name="amount" id="amount" onChange={amountChange} />
        <label htmlFor="">Expense Date</label>
        <input type="date" name="date" id="date" onChange={dateChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ExpenseForm
