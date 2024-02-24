type usersProps = {
  users: { name: string; age: number }[];
};

function Users(props: usersProps) {
  return (
    <div>
      <h3>Users</h3>
      {props.users.map((user) => (
        <p key={user.name}> {user.name}</p>
      ))}
    </div>
  );
}

export default Users;
