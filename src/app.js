import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';

import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';

import getVisibleExpenses from './selectors/expenses';

import expensesReducer from './reducers/expenses';
import filtersReducer from './reducers/filters';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();


store.dispatch(addExpense({ description: 'Water bill', amount: 200, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 300, createdAt: -1000 }));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


ReactDOM.render(<AppRouter />, document.getElementById('app'));