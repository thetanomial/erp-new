import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { getCurrentUser, login } from '../../api/authService';
import { AuthContext } from '../../contexts/AuthContext';

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const LoginForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {dispatch,state} = useContext(AuthContext)

  console.log(state)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the login function and await the response
      const response = await login(email, password);

      const user = await getCurrentUser()

      console.log(user)

      const dispatchObject = {
        user,
        message : "USER LOGGED IN SUCCESSFULLY"
      }

      dispatch({
        type : "LOGIN_USER_BEGIN",
        payload : dispatchObject
      })

      dispatch({
        type : "LOGIN_USER_SUCCESS",
        payload : dispatchObject
      })

      navigate("/user-dashboard")


    } catch (error) {
      // Handle errors and update the error state
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Login</Button>
        <p>New to our page? <Link to="/register"> Register </Link></p>
      </LoginForm>
    </Container>
  );
};

export default Login;
