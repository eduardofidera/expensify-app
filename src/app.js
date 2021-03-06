import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';

import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';

import getVisibleExpenses from './selectors/expenses';

import expensesReducer from './reducers/expenses';
import filtersReducer from './reducers/filters';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { setTimeout } from 'core-js/library/web/timers';

const store = configureStore();


store.dispatch(addExpense({ description: 'Water bill', amount: 200, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 300, createdAt: -1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 50, createdAt: 10000500050 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));