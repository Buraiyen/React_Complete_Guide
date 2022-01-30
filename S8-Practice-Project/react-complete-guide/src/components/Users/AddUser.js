import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (!enteredUsername.trim().length || !enteredAge.trim.length) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    // Retrieves user input
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    // Retrieves user input
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor='username'>Age (Years)</label>
        <input
          type='number'
          id='number'
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
