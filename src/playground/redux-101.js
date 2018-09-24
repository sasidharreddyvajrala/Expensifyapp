import {createStore} from 'redux';


// Action generators - functions that returns Action objects.

const incrementCount=({incrementBy=1}={})=>({
    type:'INCREMENT',
    incrementBy
});

const decrementCount=({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
});

const Reset=()=>({
    type:'RESET'
});

const Set=({count}={})=>({
    type:'SET',
    count:count
});
//reducer
const countReducer=(state={count:0},action)=>{

    switch(action.type){
       case('INCREMENT'):
            return{
                count:state.count+action.incrementBy
               };
       case('DECREMENT'):
            return{
                count:state.count-action.decrementBy
            };
       case('RESET'):
            return{
                count:0
              };
        case('SET'):
            return{
                count:action.count
             };
        default: 
            return state;   
    };
}

const store= createStore(countReducer);


//Action then object sent to store.

// I'd like to increment

const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(Reset());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:5}));
store.dispatch(Set({count:110}));
