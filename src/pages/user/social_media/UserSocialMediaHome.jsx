import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const UserDashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two equal columns */
  grid-template-rows: repeat(2, 1fr); /* Two equal rows */
  height: 100vh; /* Full height */
  gap: 10px; /* Optional gap between grid items */
  padding: 10px; /* Optional padding around the grid */
  box-sizing: border-box; /* Include padding in height and width */
`;

const GridItem = styled.div`
  background-color: #007bff; /* Background color for grid items */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const UserSocialMediaHome = () => {
  const location = useLocation();

  // Split the current pathname into segments
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const navigate = useNavigate()


  // Check if the current path has more segments beyond '/user-dashboard/social_media'
  const showOutlet = pathSegments.length > 2; // Expecting at least 3 segments for a nested route

  return (
    <UserDashboardContainer>
     {showOutlet ? <Outlet /> : <>
        <GridItem onClick={()=>navigate("social_media_strategies")}>Social Media Strategies</GridItem>
      <GridItem>Content Creation Team</GridItem>
      <GridItem>Influencer Marketing</GridItem>
      <GridItem>Paid Advertising</GridItem>
     </>}

    </UserDashboardContainer>
  );
};

export default UserSocialMediaHome;
