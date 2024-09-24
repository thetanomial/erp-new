import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the keyframes for the spinner animation
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled component for the spinner container
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height to center the spinner */
`;

// Styled component for the actual spinner
const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1); /* Light border */
  border-top: 8px solid #007bff; /* Blue top border */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite; /* Apply the spin animation */
`;

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
