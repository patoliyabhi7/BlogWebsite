import axios from 'axios';


// CRUD
// const API_URL = 'http://localhost:3000/api/user';
// // Get all users
export const getUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

// Create a new user
export const createUser = async (user) => {
    try {
        const response = await axios.post(API_URL, user);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

// Update a user
export const updateUser = async (id, user) => {
    try {
        const response = await axios.put(`${API_URL}/edit_profile/${id}`, user);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

// Delete a user
export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};




//BLOG
const API_URL = 'http://localhost:8000/api/blog';
// Get all users
export const getBlogs = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const getBlogById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blog:', error);
        throw error;
    }
};