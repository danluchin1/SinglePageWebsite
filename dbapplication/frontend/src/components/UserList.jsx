import React from "react";

const UserList = ({ users, onDelete }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h3 className="mb-3">User List</h3>
        {users.length > 0 ? (
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => onDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-muted">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
