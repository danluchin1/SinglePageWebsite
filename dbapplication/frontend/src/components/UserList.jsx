import UserItem from "./UserItem";

const UserList = ({ users, onDelete }) => {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <UserItem key={user.id} user={user} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default UserList;  // ✅ Make sure this line exists!
