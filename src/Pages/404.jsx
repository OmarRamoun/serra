import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  h1 {
    font-size: 5rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }
  a {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 300;
    text-decoration: none;
    margin-bottom: 1rem;
  }
`;

const NotFoundPage = () => (
  <NotFound>
    <h1>404</h1>
    <p>Page not found</p>
    <Link to="/">Go to home page</Link>
  </NotFound>
);

export default NotFoundPage;
