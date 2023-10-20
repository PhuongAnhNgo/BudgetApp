import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

function ExpenseItem(props) {
	async function onChecked(){
		try{
		  const link = "http://localhost:5000/api/deleteExpense/" + props.id;
		  await axios.get(link);       
		}catch(err){
		  console.log(err);
		}  
	  }
	
	return (
		<li className='list-group-item d-flex justify-content-between align-items-center py-3'>
			{props.name}
			<div>
			<span className='badge text-bg-primary mr-3 px-3'>{props.cost}€</span>
				<DeleteIcon className='mx-3' onClick={onChecked}/>
			</div>
		</li>
	)
};

export default ExpenseItem;