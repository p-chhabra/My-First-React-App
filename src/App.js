import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      price: "$289.67",
      date: new Date(2021, 7, 18),
    },
    {
      title: "Life Insurance",
      price: "$1000.00",
      date: new Date(2022, 3, 22),
    },
    {
      title: "House Insurance",
      price: "$2500.00",
      date: new Date(2022, 4, 26),
    },
    {
      title: "Job Insurance",
      price: "$375.00",
      date: new Date(2020, 2, 3),
    },
    {
      title: "Health Insurance",
      price: "$480.50",
      date: new Date(2019, 7, 13),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date.toISOString()}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date.toISOString()}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date.toISOString()}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        price={expenses[3].price}
        date={expenses[3].date.toISOString()}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[4].title}
        price={expenses[4].price}
        date={expenses[4].date.toISOString()}
      ></ExpenseItem>
    </div>
  );
}

export default App;
