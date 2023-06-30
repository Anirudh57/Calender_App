import React from "react";
import './ExpenseDate.css';

function ExpenseDate(props) {
    const year = (new Date().getFullYear());

    return (
        <div className="expense-date">
            <div className="expense-date__month">June</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{props.date}</div>
        </div>
    );
}

export default ExpenseDate;