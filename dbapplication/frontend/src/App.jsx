import React, { useState, useEffect } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import "bootstrap/dist/css/bootstrap.min.css"; 

const App = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from backend
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  // Add a new user
  const addUser = (name, email) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    })
      .then((res) => res.json())
      .then((newUser) => setUsers([...users, newUser]));
  };

  // Delete a user
  const deleteUser = (id) => {
    fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" })
      .then(() => setUsers(users.filter((user) => user.id !== id)));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">User Management</h1>
      <AddUser onUserAdded={addUser} />
      <UserList users={users} onDelete={deleteUser} />
    </div>
  );
};

export default App;
