import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

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
    </div>
  );
};

export default Expenses;
