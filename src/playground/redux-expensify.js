import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE

const addExpense=(
    {description='',
            note='',
           amount=0,
           createdAt=0
        }={})=>({
                type:'ADD_EXPENSE',
                expenses:{
                    id:uuid(),
                    description,
                    note,
                    amount,
                    createdAt
                }
});
//REMOVE_EXPENSE

const removeExpense=({id})=>(
    
    {
        type:'REMOVE_EXPENSE',
        id
});
//EDIT_EXPENSE
const editExpense=(id,updates)=>({
        type:'EDIT_EXPENSE',
        updates,
        id
        
});
//SET_TEXT_FILTER
const setTextFilter=(text)=>({
                      type:'TEXT_FILTER',
                      text  
});
//SORT_BY_DATE
const sortByDate=()=>({
        type:'SORTBY_DATE',
});
//SORT_BY_AMOUNT
const sortByAmount=()=>({
    type:'SORTBY_AMOUNT',
});
//SET_START_DATE
const setStartDate=(date=undefined)=>({
    type:'SETSTARTDATE',
    date
})
//SET_END_DATE
const setEndDate=(date=undefined)=>({
    type:'SETENDDATE',
    date
})



const expensesReducerDefaultState=[];

const expensesReducer=(state=expensesReducerDefaultState,action)=>{

    switch(action.type){
        case 'ADD_EXPENSE':
             return [
                 ...state,
                 action.expenses
             ];
        case 'REMOVE_EXPENSE':
             return state.filter(({id})=>id!==action.id);
        case 'EDIT_EXPENSE':
             return state.map((expense)=> {
               if(expense.id===action.id){
             return {
                ...expense,
                ...action.updates
             };
            }
             else {
                 return expense;
             };
             });
        default:
        return state;
    }
};

//store creation

//filter reducer
const filterReducerDefault={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};

const filterReducer=(state=filterReducerDefault,action)=>{
    switch(action.type){
        case 'TEXT_FILTER':
             return {
             ...state,
             text:action.text
             }
        case 'SORTBY_DATE':
             return{
                 ...state,
                 sortBy:'date'
             }
        case 'SORTBY_AMOUNT':
             return{
                 ...state,
                 sortBy:'amount'
             }
        case 'SETSTARTDATE':
             return{
                 ...state,
                 startDate:action.date
             }
        case 'SETENDDATE':
             return{
                 ...state,
                 endDate:action.date
             }
         default:
         return state;
    }
};


const store=createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filterReducer,
    })
    );
store.subscribe(()=>{
    const state=store.getState();
    const visibleExpense=getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpense);
});

// Get Visible
const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch=typeof startDate!=='number' || expense.createdAt>=startDate;
        const endDateMatch=typeof endDate!=='number' || expense.createdAt <=endData;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy==='data'){
            return a.createdAt < b.createdAt ? 1 : -1; 
        }
           else if(sortBy==='amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

const expenseOne=store.dispatch(addExpense({description:'Rent',amount:100,createdAt:-1000}));
const expenseTwo=store.dispatch(addExpense({description:'Coffee',amount:300,createdAt:-2100}));

// store.dispatch(removeExpense({id:expenseOne.expenses.id}));
// store.dispatch(editExpense(expenseTwo.expenses.id,{amount:500}));

//store.dispatch(setTextFilter('Rent'));
// store.dispatch(setTextFilter(''));

 store.dispatch(sortByAmount());
 store.dispatch(sortByDate());

 //store.dispatch(setStartDate(20003));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1230));


const demostate={
    expenses:[{
        id:"lbw",
        description:'JanuaryRent',
        note:'This was final payment for the address',
        amount:54500,
        createdAt:0
}],
    filters:{
        text: 'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
};

