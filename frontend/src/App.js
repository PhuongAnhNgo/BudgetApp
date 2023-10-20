import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Budget from './components/Budget';
import Spent from './components/Spent';
import Remain from './components/Remain';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import ChangeBudgetForm from './components/ChangeBudgetForm';

import axios from 'axios';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);
  const [spent, setSpent] = useState(0);
  const [remain, setRemain] = useState(0);

    useEffect(()=>{
      const fetchExpenses = async ()=>{
        try{
          const link = "http://localhost:5000/api/getExpenses";
          const res = await axios.get(link);
          console.log(res.data);
          setExpenses(res.data);  
             
        }catch(err){
          console.log(err);
        }
      }
      fetchExpenses().then(()=>{
        var sum = 0;
          for(var i = 0; i<expenses.length; i++){
            sum = sum + expenses[i].cost;
          }
          setSpent(sum); 
      }); //run function

      const fetchBudget = async ()=>{
        try{
          const link = "http://localhost:5000/api/getBudget";
  
          const res = await axios.get(link);
          setBudget(res.data.budget);   
        }catch(err){
          console.log(err);
        }
      }
      fetchBudget().then(()=>{
        setRemain(budget-spent);
      }); //run function
      
    }, [expenses, budget]) 

    

  return (
    <div className='container'>
      <h1 className='my-5'>Budget Planner</h1>
      
      <div className='row my-3'>
        <div className='col-sm'>
          <Budget value={budget}/>
        </div>
        <div className='col-sm'>
          <Spent value={spent}/>
        </div>
        <div className='col-sm'>
          <Remain value={remain}/>
        </div>
      </div>

      <ChangeBudgetForm className="my-3"/>

      
      <div className='row my-2'>
        <div className='col-md-6'>
          <h3 className='mt-5 mb-3'>Expenses</h3>
          <ExpenseList value={expenses}/>
        </div>
        <div className='col-md-1'></div>
        <div className='col-md-5'>
          <h3 className='mt-5 mb-3'>Add Expense</h3>
          <AddExpenseForm/>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
