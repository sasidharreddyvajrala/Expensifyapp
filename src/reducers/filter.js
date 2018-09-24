//filter reducer
const filterReducerDefault={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};

export default(state=filterReducerDefault,action)=>{
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