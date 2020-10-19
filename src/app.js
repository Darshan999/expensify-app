import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
// Reset the own style of each browser. All browser working off of that same base. We are going to see exact
// same stuff in chrome, safari, IEEE
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water bill', amount: 200 }));
// store.dispatch(addExpense({ description: 'Gas bill', amount: 1000, createdAt: 30000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 4500 }));

// const state = store.getState();
// const visibleState = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleState);

// Provider is going to allow us to provide the store to all of the components that make up our 
// application. We do not need to manually pass the store around instead individual component 
// that want to access the store can just access it.
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));