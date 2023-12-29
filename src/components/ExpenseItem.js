import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
function ExpenseItem(props){
    return(
        <div>
            <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item_description">
            <p className='expenseName'>{props.expenseName}</p>
            <button className='price'>Rs {props.price}</button>
            </div>
            </div>
        </div>
    )
}

export default ExpenseItem;
