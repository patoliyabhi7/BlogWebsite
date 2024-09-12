import React, { useState, useEffect } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from './../../../apiService';

const App = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '', username: '', password: '' });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const data = await getUsers();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleCreate = async () => {
        try {
            await createUser(newUser);
            setNewUser({ name: '', email: '', username: '', password: '' });
            fetchUsers();
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    const handleUpdate = async (id) => {
        try {
            const updatedUser = { ...newUser }; // Example update
            await updateUser(id, updatedUser);
            fetchUsers();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div>
            <h1>Users</h1>
            <input
                type="text"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                placeholder="Name"
            />
            <input
                type="text"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                placeholder="Email"
            />
            <input
                type="text"
                value={newUser.username}
                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                placeholder="Username"
            />
            <input
                type="password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                placeholder="Password"
            />
            <button onClick={handleCreate}>Add User</button>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        {user.name} - {user.email}
                        <button onClick={() => handleUpdate(user._id)}>Update</button>
                        <button onClick={() => handleDelete(user._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;