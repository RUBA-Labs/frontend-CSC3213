import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

if (!API_BASE_URL) {
  console.error("NEXT_PUBLIC_BACKEND_API_URL is not defined. Please set it in your .env.local file.");
  // You might want to throw an error or handle this more gracefully in a production app
}

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add an interceptor to include authorization tokens
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage, sessionStorage, or a global state management
    const token = localStorage.getItem('authToken'); // Or wherever you store your token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optional: Add an interceptor to handle global errors (e.g., 401 Unauthorized)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors, e.g., redirect to login page
      console.log("Unauthorized request. Redirecting to login...");
      // Example: window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
