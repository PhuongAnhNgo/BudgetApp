import React, { useEffect, useState } from "react";
import axios from 'axios';

function AddExpenseForm() {
    const [input, setInput] = useState({
        name:"",
        cost: 0
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setInput((prevValue) => {
          return {
            ...prevValue,
            [name]: value
          };
        }); 
      }

    async function handleClick(event){
        try{
            const link = "http://localhost:5000/api/addExpense";
            await axios.post(link, {name:input.name, cost: input.cost});  
            
          }catch(err){
            console.log(err);
          }  
    }
	return (
		<form className="form-floating">
            <div className="form-floating mb-3">
            <input type="text" class="form-control"  name="name" value={input.name} onChange={handleChange}></input>
            <label >Name</label>
            </div>
            <div className="form-floating">
            <input type="text" class="form-control" name="cost" value={input.cost} onChange={handleChange}></input>
            <label >Cost</label>
            </div>

            <button className='btn btn-primary mt-3' onClick={handleClick}>Add Expense</button>
        </form>
	)
};

export default AddExpenseForm;