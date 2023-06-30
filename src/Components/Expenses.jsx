import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expense.css';

const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      day: "Monday",
    },
    { id: 'e2', title: 'New TV', amount: 799.49, day: "Tuesday" },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      day: "Wednesday",
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      day: "Thursday",
    },
  ];

function Expenses(props){
    return(
        <Card className="expenses">
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} day={expenses[0].day}></ExpenseItem>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} day={expenses[1].day}></ExpenseItem>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} day={expenses[2].day}></ExpenseItem>
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} day={expenses[3].day}></ExpenseItem>
        </Card>
    );
}

export default Expenses;

