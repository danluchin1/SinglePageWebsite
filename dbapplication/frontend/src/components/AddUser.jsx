import { useState } from "react";
import axios from "axios";

const AddUser = ({ onUserAdded }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;

    try {
      await axios.post("http://localhost:3000/users", { name, email });
      onUserAdded(); // Refresh the user list
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-user-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
