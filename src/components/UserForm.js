import React, { useState } from 'react';

const UserForm = ({ onAddUser }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Viewer');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onAddUser({ name, role });
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New User</h3>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="User Name" 
        required 
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="Admin">Admin</option>
        <option value="Editor">Editor</option>
        <option value="Viewer">Viewer</option>
      </select>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
