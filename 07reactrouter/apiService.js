import axios from 'axios';


// CRUD
const API_URL2 = 'http://localhost:3000/api/user';
// // Get all users
export const getUsers = async () => {
    try {
        const response = await axios.get(API_URL2);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

// Create a new user
export const createUser = async (user) => {
    try {
        const response = await axios.post(API_URL2, user);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

// Update a user
export const updateUser = async (id, user) => {
    try {
        const response = await axios.put(`${API_URL2}/edit_profile/${id}`, user);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

// Delete a user
export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${API_URL2}/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};



// // fetch
// //BLOG
// const API_URL = 'http://localhost:8000/api/blog';
// // const API_URL = 'https://blog-website-backend-nm9ln74rs-abhis-projects-5ebf729c.vercel.app/api/blog';
// // const API_URL = 'https://musical-horse-1e7cc7.netlify.app/api/blog';

// // Get all users
// export const getBlogs = async () => {
//     try {
//         const response = await fetch(API_URL);
//         console.log(response);
//         if(!response){
//             throw new Error('response is null');
//         }
//         if (!response.ok) {
//             throw new Error('network response was not ok');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching users:', error);
//         throw error;
//     }
// };

// export const getBlogById = async (id) => {
//     try {
//         const response = await fetch(`${API_URL}/${id}`);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching blog:', error);
//         throw error;
//     }
// };


// axios
// const API_URL = 'http://localhost:8000/api/blog';
// const API_URL = 'https://blog-website-backend-ek8l2cnek-abhis-projects-5ebf729c.vercel.app/api/blog';
// const API_URL = 'https://blog-website-backend-fmsu4gdex-abhis-projects-5ebf729c.vercel.app/api/blog';
// // Get all users
// export const getBlogs = async () => {
//     try {
//         const response = await axios.get(API_URL);
//         console.log(response)
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching users:', error);
//         throw error;
//     }
// };

// export const getBlogById = async (id) => {
//     try {
//         const response = await axios.get(`${API_URL}/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching blog:', error);
//         throw error;
//     }
// };


// github api
const GITHUB_API_URL = 'https://api.github.com/repos';
const OWNER = 'patoliyabhi7';
const REPO = 'BlogWebsite';
const FILE_PATH = '07reactrouter/blogContent.json';

const API_URL = `${GITHUB_API_URL}/${OWNER}/${REPO}/contents/${FILE_PATH}`;

export const getBlogs = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'Accept': 'application/vnd.github.v3.raw' // This header ensures you get the raw file content
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
};

export const getBlogById = async (id) => {
    try {
        const blogs = await getBlogs();

        const blog = blogs.find(blog => { if (blog._id === id) return blog; });
        if (!blog) {
            throw new Error(`Blog with ID ${id} not found`);
        }
        return blog;
    } catch (error) {
        console.error('Error fetching blog:', error.message);
        throw error;
    }
};