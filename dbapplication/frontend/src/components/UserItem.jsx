const UserItem = ({ user, onDelete }) => {
    return (
      <li className="user-item">
        {user.name} ({user.email})
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </li>
    );
  };
  
  export default UserItem;
  