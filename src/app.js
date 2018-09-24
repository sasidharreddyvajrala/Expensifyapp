import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import AppRouter from './Routers/Approuter.js';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store= configureStore();
store.dispatch(addExpense({description:'Waterbill',amount:50000}));
store.dispatch(addExpense({description:'Gasbill',createdAt:1000}));
store.dispatch(addExpense({description:'Rent',amount:100000}));

const state=store.getState()

const getVisible=getVisibleExpenses(state.expenses,state.filters);

console.log(getVisible);

const jsx=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));


