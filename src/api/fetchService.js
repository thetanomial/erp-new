// api/fetchService.js
import axios from "axios";

import users from '../users.json'

// Base URL for the API
const API_BASE_URL = "https://jsonplaceholder.typicode.com/";

// Fetch all posts
export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}posts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

// Fetch a single post by ID
export const fetchPostById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching post with id ${id}:`, error);
    throw error;
  }
};

// Create a new post
export const createPost = async (newPost) => {
  try {
    const response = await axios.post(`${API_BASE_URL}posts`, newPost);
    return response.data;
  } catch (error) {
    console.error("Error creating new post:", error);
    throw error;
  }
};

// Update an existing post by ID
export const updatePost = async (id, updatedPost) => {
  try {
    const response = await axios.put(`${API_BASE_URL}posts/${id}`, updatedPost);
    return response.data;
  } catch (error) {
    console.error(`Error updating post with id ${id}:`, error);
    throw error;
  }
};

// Delete a post by ID
export const deletePost = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting post with id ${id}:`, error);
    throw error;
  }
};


export const loginUser = (credentials) => {
    const { email, password } = credentials;
  
    // Find the user in users.json based on the provided email and password
    const user = users.find(user => user.email === email && user.password === password);
  
    if (user) {
      // Return the user token if credentials match
      return {
        success: true,
        token: user.token,
        message: 'Login successful'
      };
    } else {
      return {
        success: false,
        message: 'Invalid email or password'
      };
    }
  };

  export const getCurrentUser = () => {
    // Find the user in users.json based on the provided token
    const token = localStorage.getItem('localToken') || null
    const user = users.find(user => user.token === token);
  
    if (user) {
      // Return the user details if the token matches
      return {
        success: true,
        user: {
          email: user.email,
          token: user.token
        },
        message: 'User retrieved successfully'
      };
    } else {
      return {
        success: false,
        message: 'Invalid token'
      };
    }
  };
  