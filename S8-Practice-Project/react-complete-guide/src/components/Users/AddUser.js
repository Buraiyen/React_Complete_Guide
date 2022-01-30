import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
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
        <input type='text' id='username' onChange={usernameChangeHandler} />
        <label htmlFor='username'>Age (Years)</label>
        <input type='number' id='number' onChange={ageChangeHandler} />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
