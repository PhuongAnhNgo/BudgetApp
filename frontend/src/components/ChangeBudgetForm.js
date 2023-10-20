import React, { useEffect, useState } from "react";
import axios from 'axios';

function ChangeBudgetForm() {
    const [value, setValue] = useState(0);

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleClick(event){
        axios.post("http://localhost:5000/api/updateBudget", {newBudget:value});     
        
    }
	return (
		<div className='row'>
            <form>
                <div className='col-lg-6 col-md-8 mt-3'> 
                    <div className="mb-3">
                        <label  class="form-label">Change Budget into:</label>
                        <div className="input-group">
                            <span className="input-group-text">€</span>
                            <input type="text" className="form-control" id="basic-url" onChange={handleChange} value={value}></input>
                            <span><button className='btn btn-primary mx-3' onClick={handleClick}>Change</button></span>
                        </div>
                        <div className="form-text" id="basic-addon4">Add budget in number. For example: 2000</div>
                    </div>     
                </div>
            </form>
        </div>
	)
};

export default ChangeBudgetForm;