const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors'); 

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/BudgetApp");

app.get('/', (req, res) => {
  res.send("This is backend");
});

//------------------------------------------------
//                 Create Schema
//------------------------------------------------
const budgetSchema = new mongoose.Schema({
    budget: {
        type: Number, 
        require: true
    }
});

const expenseSchema = new mongoose.Schema({
    name: {  //Add a validation
        type: String
    },
    cost: {
        type: Number
    }
});

//------------------------------------------------
//          Create collection/ table
//------------------------------------------------
const Budget = mongoose.model("Budget", budgetSchema); 
const Expense = mongoose.model("Expense", expenseSchema);


//------------------------------------------------
//                  API Routes
/*                                               
    + Get budget:                     /api/getBudget (get)
    + Get all expenses:               /api/getExpenses (get)
    + Add an expense:                 /api/addExpense (post: name, cost) 
    + Delete an expense:              /api/deleteExpense/:id (get)
    + Update budget:                  /api/updateBudget (post: newBudget)

*/
//------------------------------------------------
// Get budget
app.get("/api/getBudget", (req,res)=>{
    Budget.findOne({}).then(function(budget){   
        return res.send(budget);
    });
});

// Get all expenses: 
app.get("/api/getExpenses", (req,res)=>{ 
    Expense.find({}).then(function(expenses){ 
        return res.send(expenses);
    });  
});

// Add an expense
app.post("/api/addExpense", (req,res)=>{
    const name = req.body.name;
    const cost = req.body.cost;
    
    const newExpense = new Expense({
        name: name,
        cost: cost
    })
    newExpense.save();
});

// Delete an expense  
app.get("/api/deleteExpense/:id", (req,res)=>{
    const id = req.params.id;

    Expense.deleteOne({_id:id}).then (function() {  })
      .catch(function (err) {
        console.log(err);
      }); 
});

// Route for deleting a subject
app.get("/api/deleteSubject/:id", (req,res)=>{
    const id = req.params.id;

    Subject.deleteOne({_id:id}).then (function() {  })
      .catch(function (err) {
        console.log(err);
      }); 
 
    try {
        Word.deleteMany( { subjectId : id } );
     } catch (e) {
        print (e);
     }
     
});

// Delete a word
app.get("/api/deleteWord/:id", (req,res)=>{
    const id = req.params.id;

    Word.deleteOne({_id:id}).then (function() {  })
      .catch(function (err) {
        console.log(err);
      }); 
     
});

//Update budget                 
app.post('/api/updateBudget',(req,res)=>{
    const newBudget = req.body.newBudget;

    Budget.updateOne({}, 
        {budget:newBudget}).then(function (err, docs) {
        if (err){ console.log(err)}
        else{ console.log("Updated Docs : ", docs); }
    });   
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });