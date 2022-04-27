import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import NewExpense from "../NewExpenses/NewExpense";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import "./Expenses.css";

function Expenses(props) {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Car Insurance",
      price: "$289.67",
      date: new Date(2021, 7, 18),
    },
    {
      id: "e2",
      title: "Life Insurance",
      price: "$1000.00",
      date: new Date(2022, 3, 22),
    },
    {
      id: "e3",
      title: "House Insurance",
      price: "$2500.00",
      date: new Date(2022, 4, 26),
    },
    {
      id: "e4",
      title: "Job Insurance",
      price: "$375.00",
      date: new Date(2020, 2, 3),
    },
    {
      id: "e5",
      title: "Health Insurance",
      price: "$480.50",
      date: new Date(2019, 7, 13),
    },
  ];

  const addExpenseHandler = (newExpense) => {
    setExpenses((previousExpenses) => {
      return [newExpense, ...previousExpenses];
    });
  };

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const [year, setYear] = useState("2020");
  const selectYearHandler = (yearValue) => {
    const _year = yearValue;
    setYear(_year);
    console.log(_year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() == year;
  });

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>

      <Card className="expenses">
        <ExpensesFilter
          onSelectYear={selectYearHandler}
          filteredYear={year}
        ></ExpensesFilter>
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        ))}
        ;
      </Card>
    </div>
  );
}

export default Expenses;
