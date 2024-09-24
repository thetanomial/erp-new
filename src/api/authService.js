import axiosInstance from "./axiosInstance";

const login = async (email, password) => {
  try {
    const response = await axiosInstance.post('/auth/login', {
      email,
      password,
    });
    const { token } = response.data;

    // Store token in localStorage
    localStorage.setItem('token', token);

    return response.data; // You can return the token or other user data as needed
  } catch (error) {
    console.error("Login failed:", error);
    throw error; // Re-throw the error to handle it in the UI if needed
  }
};

const register = async (name, email, password) => {
  try {
    const response = await axiosInstance.post('/auth/register', {
      name,
      email,
      password,
    });
    const { token } = response.data;

    // Store token in localStorage
    localStorage.setItem('token', token);

    return response.data; // Return any necessary data from the response
  } catch (error) {
    console.error("Registration failed:", error);
    throw error; // Re-throw the error to handle it in the UI if needed
  }
};

const logout = () => {
  // Remove token from localStorage
  localStorage.removeItem('token');
  
  // Optionally, make an API call to invalidate the token on the server
  console.log("User logged out successfully");
};

// New getCurrentUser service
const getCurrentUser = async () => {
  try {
    // Get the token from localStorage
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');

    // Make a request to the /auth/currentUser route
    const response = await axiosInstance.get('/auth/currentUser', {
      headers: {
        Authorization: `Bearer ${token}`, // Attach the token to the request
      },
    });

    return response.data; // Return the current user data
  } catch (error) {
    console.error("Failed to fetch current user:", error);
    throw error; // Re-throw the error to handle it in the UI if needed
  }
};

export {
  login,
  logout,
  register,
  getCurrentUser, // Export the new service
};
