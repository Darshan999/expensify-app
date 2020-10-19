import React from 'react';
// It connects your component to the redux store right here. It's important to know that when you connect a
// component to the redux store it's reactive which means that as the store changes your component is going 
// to get re-rendered with those new values.
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No Expenses</p>
            ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />
                    })
                )
        }
    </div>
);

// connect(provides what we want to connect)(passed component)

// 3rd way to connect
const mapStateProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateProps)(ExpenseList);

// 1 way to connect component

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses,
//         filters: state.filters
//     }
// })(ExpenseList);

// export default ConnectedExpenseList;

// 2nd way to connect component

// export default connect((state) => {
//     return {
//         expenses: state.expenses,
//         filters: state.filters
//     }
// })(ExpenseList);