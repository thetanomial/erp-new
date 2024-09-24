import React from 'react';
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

const UserAccountsHome = () => {
  return (
    <UserDashboardContainer>
      <GridItem>Accounts Payable</GridItem>
      <GridItem>Accounts Receivable</GridItem>
      <GridItem>General Ledger</GridItem>
      <GridItem>Payroll</GridItem>
    </UserDashboardContainer>
  );
};

export default UserAccountsHome;
