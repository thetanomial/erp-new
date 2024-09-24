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
import UserSocialMediaHome from './pages/user/social_media/UserSocialMediaHome'
import ServiceValidator from './components/ServiceValidator'
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
      element : <ServiceValidator service={"accounts"}><UserAccountsHome /></ServiceValidator>
    },
    {
      path : 'social_media',
      element : <ServiceValidator service={"social_media"}><UserSocialMediaHome /></ServiceValidator>,
      children : [
        {
          path : 'social_media_strategies',
          element : <h3>Social Media strategies</h3>
        }
      ]
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