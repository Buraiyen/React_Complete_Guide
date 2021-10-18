import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map(function (obj, i) {
        return (
          <ExpenseItem
            title={props.expenses[i].title}
            amount={props.expenses[i].amount}
            date={props.expenses[i].date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
