import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; 

  const {state} = useContext(AuthContext)

  
console.log(state)
    if (state.loading) {
        return <p>loading...</p>
    }

  // If not authenticated, redirect to login page
  if (!state.currentUser || state.currentUser.role!=="user") {
    toast.error("Unauthorized")
    return <Navigate to="/login" />;
  }

  // If authenticated, render the protected content (children)
  return children;
};

export default ProtectedRoute;
