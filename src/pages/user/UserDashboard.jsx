import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import AccountsSidebar from './accounts/AccountsSidebar';

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
`;

const SidebarLink = styled(Link)`
  display: block;
  color: white;
  padding: 10px;
  text-decoration: none;
  margin-bottom: 10px;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
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
  padding: 10px 20px;
  margin-bottom: 20px; /* Space below the navbar */
  border-radius: 5px; /* Rounded corners */
`;

const Title = styled.h2`
  color: #333;
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
        <Title>Welcome {state?.currentUser?.name}</Title>
        {renderSidebarLinks()}

        <SidebarLink onClick={() => {
          localStorage.removeItem('token');
          dispatch({
            type: "LOGOUT_USER"
          });
          navigate("/login");
        }}>
          Logout
        </SidebarLink>
      </Sidebar>
      <MainContent>
        <Navbar>
          <h3>User Dashboard</h3>
          {/* You can add more navbar items here */}
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
