import { useState, useEffect } from "react";
import axios from "axios";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container">
      <h1>User Management</h1>
      <AddUser onUserAdded={fetchUsers} />
      <UserList users={users} onDelete={deleteUser} />
    </div>
  );
};

export default App;
