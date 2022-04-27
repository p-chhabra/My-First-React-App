import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/Expenses/NewExpense";

function App() {
  const expenseArray = {};
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
