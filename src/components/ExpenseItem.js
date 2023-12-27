import './ExpenseItem.css'
function ExpenseItem(props){
    return(
        <div>
            <div className="expense-div">
            <p className='expenseName'>{props.expenseName}</p>
            <p className='price'>Rs {props.price}</p>
            </div>
        </div>
    )
}

export default ExpenseItem;
