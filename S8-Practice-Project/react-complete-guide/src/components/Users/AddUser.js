const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor='username'>Username</label>
      <input type='text' id='username' />
      <label htmlFor='username'>Age (Years)</label>
      <input type='username' id='number' />
      <button type='submit'>Add User</button>
    </form>
  );
};

export default AddUser;
