
import React from 'react';
import {connect} from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItems=({dispatch,id,description,amount,createdAt})=>(
  
   <div>     
     <h3>Expense List Items :</h3>
     <p>{description} - {createdAt}</p>
     <p>{amount}</p>
     <button onClick={()=>{
       dispatch(removeExpense({id}));
      }}>Remove</button>
   </div>
   );
   

export default connect()(ExpenseListItems);