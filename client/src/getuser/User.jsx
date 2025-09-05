import React from 'react';

const User = () => {
    const users = [
    { id: 1, name: 'Rawen', email: 'rawen@example.com' },
    { id: 2, name: 'Alice', email: 'alice@example.com' },
    { id: 3, name: 'ch  wki', email: 'chawki@hello.com' },
  ];
  return (
    <div className='container mt-5'>
      <h2>User Table</h2>
 <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
