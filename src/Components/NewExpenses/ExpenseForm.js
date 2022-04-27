import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  //States
  const [enteredTitle, setEnteredTitle] = useState("");
  const [eneteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Handler Functions
  const onTitleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const onAmountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const onDateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: eneteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={onTitleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="text"
            value={eneteredAmount}
            onChange={onAmountChangeHandler}
            step="0.01"
            min="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={onDateChangeHandler}
            min="2019-01-01"
            max="2022-12-12"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
