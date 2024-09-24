import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import AccountsSidebar from './accounts/AccountsSidebar';
import UserSocialMediaSidebar from './social_media/UserSocialMediaSidebar';
import { toast } from 'react-toastify';

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #007bff;
  color: white;
  padding: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px; /* Rounded corners */
`;

const SidebarLink = styled(Link)`
  display: block;
  background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent white background */
  color: white;
  padding: 15px 20px; /* Increased padding for larger clickable area */
  text-decoration: none;
  margin-bottom: 15px; /* Increased margin for spacing between links */
  border-radius: 4px;
  font-size: 16px; /* Increased font size */
  font-weight: bold; /* Bold font for better visibility */
  transition: background-color 0.3s, transform 0.2s; /* Added transform transition for hover effect */

  &:hover {
    background-color: rgba(255, 255, 255, 0.2); /* Lighter background on hover */
    transform: translateY(-2px); /* Subtle lift effect on hover */
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 1rem;
  background-color: white;
  overflow-y: auto; /* Allow scrolling if content overflows */
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff;
  color: white;
  padding: 15px 20px; /* Increased padding for a better appearance */
  margin-bottom: 20px; /* Space below the navbar */
  border-radius: 5px; /* Rounded corners */
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  color: white;
  text-decoration: underline;
  cursor: pointer;
  margin-right: 15px;

  &:hover {
    color: #0056b3;
    transform: scale(1.05); /* Slightly enlarge on hover */
  }
`;

const UserDashboard = () => {
  const { state, dispatch } = useContext(AuthContext);

  if (state.loading) {
    return <p>Loading...</p>;
  }

  const location = useLocation();
  const navigate = useNavigate();

  const showGoBackButton = location.pathname.startsWith('/user-dashboard/') && location.pathname !== '/user-dashboard/';

  const renderSidebarLinks = () => {
    if (location.pathname.startsWith('/user-dashboard/accounts')) {
      return <AccountsSidebar />;
    }
    if (location.pathname.startsWith('/user-dashboard/social_media')) {
      return <UserSocialMediaSidebar />;
    }
    
    return (
      <>
        <SidebarLink to="settings">Settings</SidebarLink>
        <SidebarLink to="profile">Profile</SidebarLink>
      </>
    ); // Default case if no matching route
  };

  return (
    <DashboardContainer>
      <Sidebar>
        {renderSidebarLinks()}

        <SidebarLink onClick={() => {
          localStorage.removeItem('token');
          dispatch({
            type: "LOGOUT_USER"
          });
          navigate("/login");
          toast.info("You have been logged out successfully.");
        }}>
          Logout
        </SidebarLink>
      </Sidebar>
      <MainContent>
        <Navbar>
          <h1>{state?.currentUser?.name}</h1>
          <div>
            <Link to="/user-dashboard/overview" style={{ color: 'white', marginRight: '15px' }}>
              Overview
            </Link>
            <Link to="/user-dashboard/reports" style={{ color: 'white' }}>
              Reports
            </Link>

            {showGoBackButton && (
              <LinkButton onClick={() => navigate(-1)}>Go back</LinkButton>
            )}
          </div>
        </Navbar>
        <Outlet /> {/* Renders child route components */}
      </MainContent>
    </DashboardContainer>
  );
};

export default UserDashboard;
