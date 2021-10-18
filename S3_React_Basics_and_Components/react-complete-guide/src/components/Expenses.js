import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div>
      <h2>Let's get started!</h2>

      {props.expenses.map(function (obj, i) {
        return (
          <ExpenseItem
            title={props.expenses[i].title}
            amount={props.expenses[i].amount}
            date={props.expenses[i].date}
          />
        );
      })}
    </div>
  );
};

export default Expenses;
