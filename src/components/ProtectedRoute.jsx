import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import LoadingSpinner from '../assets/LoadingSpinner';

const ProtectedRoute = ({ children }) => {
  const { state } = useContext(AuthContext);
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    // Ensure the spinner shows for at least 2 seconds
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 500);

    return () => clearTimeout(timer); // Cleanup the timeout
  }, []);

  // Show spinner if loading or ensuring the minimum spinner delay
  if (state.loading || showSpinner) {
    return <LoadingSpinner />;
  }

  // If user is not authenticated or role is not "user", navigate to login
  if (!state.currentUser || state.currentUser.role !== "user") {
    toast.error("Unauthorized. Please log in.");
    return <Navigate to="/login" />;
  }

  // If authenticated and has correct role, render the protected content
  return children;
};

export default ProtectedRoute;
