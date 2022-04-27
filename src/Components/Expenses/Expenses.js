import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const expenses = [
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

  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        price={expenses[3].price}
        date={expenses[3].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[4].title}
        price={expenses[4].price}
        date={expenses[4].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
