


export const removeExpense=({id})=>(
    
    {
        type:'REMOVE_EXPENSE',
        id
});
//EDIT_EXPENSE
export const editExpense=(id,updates)=>({
        type:'EDIT_EXPENSE',
        updates,
        id
        
});
//SET_TEXT_FILTER
export const setTextFilter=(text)=>({
        type:'TEXT_FILTER',
        text  
});
//SORT_BY_DATE
export const sortByDate=()=>({
        type:'SORTBY_DATE',
});
//SORT_BY_AMOUNT
export const sortByAmount=()=>({
    type:'SORTBY_AMOUNT',
});
//SET_START_DATE
export const setStartDate=(date=undefined)=>({
    type:'SETSTARTDATE',
    date
})
//SET_END_DATE
export const setEndDate=(date=undefined)=>({
    type:'SETENDDATE',
    date
})
