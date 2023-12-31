import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import './Expense.css';

function ExpenseItem(props){
    
    return(
            <Card className="expense-item">
                <ExpenseDate date = {props.day}/>
                <div className="expense-item__description">
                    <h2 className="expense-item h2">{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
    );
}

export default ExpenseItem;