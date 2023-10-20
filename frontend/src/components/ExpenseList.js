import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props){
    var expenses = props.value;
    return (
          <ul className='list-group mt-3 mb-3'>
          {expenses.map((expense) => (
            <ExpenseItem
              id={expense._id}
              name={expense.name}
              cost={expense.cost}
            />
          ))}
        </ul>   
    )
}

export default ExpenseList;