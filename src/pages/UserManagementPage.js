import React, { useState } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

const UserManagementPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'prem prakash singh', role: 'Admin' },
    { id: 2, name: 'mohan singh', role: 'Editor' },
  ]);

  const handleAddUser = (newUser) => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleUpdateRole = (id, newRole) => {
    setUsers(users.map(user => (user.id === id ? { ...user, role: newRole } : user)));
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm onAddUser={handleAddUser} />
      <UserList 
        users={users} 
        onDeleteUser={handleDeleteUser} 
        onUpdateRole={handleUpdateRole} 
      />
    </div>
  );
};

export default UserManagementPage;
