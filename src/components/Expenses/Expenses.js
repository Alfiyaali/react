import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';


const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  const filterChangeHandler = selectedYear =>{
    setFilterYear(selectedYear);
  }
  return (
    <Card className="expenses">
    <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
    <ExpenseItem
    title={props.items[0].title}
    amount={props.items[0].amount}
    date={props.items[0].date} />

<ExpenseItem
    title={props.items[1].title}
    amount={props.items[1].amount}
    date={props.items[1].date} />

<ExpenseItem
    title={props.items[2].title}
    amount={props.items[2].amount}
    date={props.items[2].date} />
    
    </Card>
  )
}


export default Expenses;
