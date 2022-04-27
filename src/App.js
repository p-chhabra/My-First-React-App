import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";

function App() {
  let expenseArray = {};
  const addExpenseHandler = (expenseData) => {
    expenseArray = {
      ...expenseData,
    };
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenseArray={expenseArray}></Expenses>
    </div>
  );
}

export default App;
