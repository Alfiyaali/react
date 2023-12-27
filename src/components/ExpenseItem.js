import './ExpenseItem.css'
function ExpenseItem(){
    const expenseName1 = "Food";
    const price1 = 10

    const expenseName2 = "Petrol";
    const price2 = 100

    const expenseName3 = "Movie";
    const price3 = 300
    return(
        <div>
            <h2 className='expense-heading'>Expense Items</h2>
            
            <div className="expense-div">
            <p className='expenseName'>{expenseName1}</p>
            <p className='price'>Rs {price1}</p>
            </div>
            
            <div className="expense-div">
            <p className='expenseName'>{expenseName2}</p>
            <p className='price'>Rs {price2}</p>
            </div>
            
            <div className="expense-div">
            <p className='expenseName'>{expenseName3}</p>
            <p className='price'>Rs {price3}</p>
            </div>
        </div>
    )
}

export default ExpenseItem;
