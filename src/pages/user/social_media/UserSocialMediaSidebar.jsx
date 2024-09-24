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

const UserSocialMediaSidebar = () => {
  return (
    <SidebarContainer>
      <SidebarLink to="/user-dashboard/social_media/view">View Posts</SidebarLink>
      <SidebarLink to="/user-dashboard/social_media/add">Add Posts</SidebarLink>
    </SidebarContainer>
  );
};

export default UserSocialMediaSidebar;
