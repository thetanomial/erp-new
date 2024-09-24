import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  margin-bottom: 1rem;
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

const AccountsSidebar = () => {
  return (
    <SidebarContainer>
      <SidebarLink to="/user-dashboard/accounts/view">View Accounts</SidebarLink>
      <SidebarLink to="/user-dashboard/accounts/add">Add Account</SidebarLink>
    </SidebarContainer>
  );
};

export default AccountsSidebar;
