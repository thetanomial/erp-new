import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Dashboard from './pages/user/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import AuthProvider from './contexts/AuthContext'
import UserDashboard from './pages/user/UserDashboard'
import UserDashboardHome from './pages/user/UserDashboardHome'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import UserAccountsHome from './pages/user/accounts/UserAccountsHome'
const router = createBrowserRouter([{
  path : "/login",
  element : <Login />
},
{
  path : "/register",
  element : <Register />
},

{
  path : "/user-dashboard",
  element : <ProtectedRoute><UserDashboard /></ProtectedRoute>,
  children : [
    {
      path : '',
      element : <UserDashboardHome />
    },
    {
      path : 'accounts',
      element : <UserAccountsHome />
    }
  ]
}

])

const App = () => {
  return (
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App