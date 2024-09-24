import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify'; // Import the toast function

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
  align-items: center; /* Center items vertically */
  justify-content: center; /* Center items horizontally */
  padding: 10px; /* Add some padding */
  font-size: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  /* New style to align items close together */
  gap: 10px; /* Space between icon and text */
`;

const Icon = styled.i`
  font-size: 1.5rem; /* Adjust icon size */
`;

const UserDashboardHome = () => {
  const navigate = useNavigate();
  const { state } = useContext(AuthContext);
  
  // Destructure services array for easier access
  const services = state.currentUser.services;

  console.log(services)

  const hasService = (service) => services.includes(service); // Check if service is in the array

  const handleServiceClick = (service) => {
    if (hasService(service)) {
      navigate(`${service}`); // Navigate if the service is available
    } else {
      toast.warn("You have not opted for this service"); // Show toast if not available
    }
  };

  return (
    <UserDashboardContainer>
      <GridItem onClick={() => handleServiceClick("accounts")}>
        <Icon className={hasService('accounts') ? "fas fa-plus-circle" : "fas fa-lock"} />
        Accounts
      </GridItem>
      <GridItem onClick={() => handleServiceClick("social_media")}>
        <Icon className={hasService('social_media') ? "fas fa-plus-circle" : "fas fa-lock"} />
        Social Media
      </GridItem>
      <GridItem onClick={() => handleServiceClick("legal")}>
        <Icon className={hasService('legal') ? "fas fa-plus-circle" : "fas fa-lock"} />
        Legal
      </GridItem>
      <GridItem onClick={() => handleServiceClick("hr")}>
        <Icon className={hasService('hr') ? "fas fa-plus-circle" : "fas fa-lock"} />
        Human Resource
      </GridItem>
    </UserDashboardContainer>
  );
};

export default UserDashboardHome;
