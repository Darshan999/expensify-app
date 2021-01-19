import React from 'react';
// It connects your component to the redux store right here. It's important to know that when you connect a
// component to the redux store it's reactive which means that as the store changes your component is going 
// to get re-rendered with those new values.
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Expenses</span>
                    </div>
                ) : (
                        props.expenses.map((expense) => {
                            return <ExpenseListItem key={expense.id} {...expense} />
                        })
                    )
            }
        </div>
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