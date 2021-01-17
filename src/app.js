import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
// import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
// Reset the own style of each browser. All browser working off of that same base. We are going to see exact
// same stuff in chrome, safari, IEEE
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

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
);

let hasRendered = false;

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
}


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('log in', user);
        store.dispatch(login(user.uid));
        // get All the expenses 
        store.dispatch(startSetExpenses());
        renderApp();
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
    } else {
        console.log('log out');
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
})
