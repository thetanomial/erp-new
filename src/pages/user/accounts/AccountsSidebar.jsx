import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  margin-bottom: 1rem;
  padding: 1rem; /* Add padding around the sidebar */
  background-color: #0056b3; /* Sidebar background color */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
`;

const SidebarLink = styled(Link)`
  display: block;
  color: white;
  padding: 15px 20px; /* Increased padding for larger clickable area */
  text-decoration: none;
  margin-bottom: 15px; /* Increased margin for spacing between links */
  border-radius: 4px;
  font-size: 16px; /* Increased font size */
  font-weight: bold; /* Bold font for better visibility */
  transition: background-color 0.3s, transform 0.2s; /* Added transform transition for hover effect */

  &:hover {
    background-color: #004494; /* Darker shade on hover */
    transform: translateY(-2px); /* Subtle lift effect on hover */
  }
`;

const AccountsSidebar = () => {
  return (
    <SidebarContainer>
      <SidebarLink to="/user-dashboard/accounts/view">View Accounts</SidebarLink>
      <SidebarLink to="/user-dashboard/accounts/add">Add Account</SidebarLink>
    </SidebarContainer>
  );
};

export default AccountsSidebar;
