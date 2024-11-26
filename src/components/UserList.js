import React from 'react';

const UserList = ({ users, onDeleteUser, onUpdateRole }) => {
  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.role}
            {user.role !== 'Admin' && (
              <>
                <button onClick={() => onDeleteUser(user.id)}>Delete</button>
                <select 
                  value={user.role} 
                  onChange={(e) => onUpdateRole(user.id, e.target.value)}
                >
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
