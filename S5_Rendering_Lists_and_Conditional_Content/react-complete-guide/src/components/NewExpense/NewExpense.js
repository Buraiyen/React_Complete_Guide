import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const [isFormVisible, setFormVisibility] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const clickHandler = () => {
    setFormVisibility(true);
    console.log(isFormVisible);
  };

  return (
    <div className='new-expense'>
      {!isFormVisible && <button onClick={clickHandler}>Add Expense</button>}
      {isFormVisible && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      )}
    </div>
  );
};

export default NewExpense;
