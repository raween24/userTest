import React, { useState, useEffect } from 'react';
import './User.css';
import axios from 'axios';

const User = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from backend
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "GET",
        credentials: "omit", // n’envoie aucun cookie
      });

      const data = await response.json();
      console.log("Réponse sans headers:", data);
    } catch (error) {
      console.error("Erreur (fetch sans headers) :", error);
    }
  };

  fetchData();
}, []);

  return (
    <div className='userTable'>
      <button 
        type="button" 
        className="btn btn-primary addUserButton"
      >
        <i className="fa-solid fa-user-circle-plus"></i> Add User
      </button>

      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>mdp</th>
            <th>name</th>
            <th>adresse</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.mdp}</td>
              <td>{user.name}</td>
              <td>{user.adresse}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
