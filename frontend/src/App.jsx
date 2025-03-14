import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5050/users").then((res) => setUsers(res.data));
  }, []);

  const addUser = () => {
    if (!name) return;
    axios.post("http://localhost:5050/users", { name }).then((res) => {
      setUsers([...users, res.data]);
      setName("");
    });
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:5050/users/${id}`).then(() => {
      setUsers(users.filter(user => user.id !== id));
    });
  };

  return (
    <div className="container">
      <h1>User Management</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;