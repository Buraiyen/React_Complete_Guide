import Card from '../UI/Card';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' />
        <label htmlFor='username'>Age (Years)</label>
        <input type='username' id='number' />
        <button type='submit'>Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
