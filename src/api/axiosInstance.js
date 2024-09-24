import axios from 'axios';

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL, // Your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from localStorage and set it in the request headers
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle the error before the request is sent
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx causes this function to trigger
    return response;
  },
  (error) => {
    // Handle responses with status codes outside of the 2xx range
    if (error.response && error.response.status === 401) {
      // Optionally redirect to login page or show an error message
      localStorage.removeItem('token');
      window.location.href = '/login'; // Redirect to login if unauthorized
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
