import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItems from './ExpenseListItems';
import selectExpenses from '../selectors/expenses';
const EspenseList =(props)=>(
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense)=>{
            return <ExpenseListItems key={expense.id}{...expense}/>
        })}
    </div>
);

const mapStateToProps = (state)=>{
    return {
        expenses:selectExpenses(state.expenses,state.filters)
    };
}

export default connect(mapStateToProps)(EspenseList);


