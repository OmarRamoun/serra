import React from 'react';
import styled from 'styled-components';
import HelpLink from '../Components/HelpLink';

const Container = styled.section`
  box-shadow: 0 0 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 5rem;
  max-width: 70%;
  background:
    linear-gradient(
      to left bottom,
      rgba(248, 17, 119, 0.2) 0%,
      rgba(255, 60, 130, 0.2) 10%,
      rgba(255, 165, 87, 0.2) 15%,
      rgba(254, 197, 92, 0.2) 20%,
      rgba(206, 218, 120, 0.2) 30%,
      rgba(44, 232, 174, 0.2) 40%,
      rgba(0, 228, 227, 0.2) 50%,
      rgba(4, 235, 225, 0.2) 60%,
      rgba(3, 196, 239, 0.2) 70%,
      rgba(50, 92, 238, 0.2) 80%,
      rgba(28, 72, 221, 0.2) 90%,
      rgba(236, 63, 231, 0.2) 100%);
  background-size: 100% 100%;
  backdrop-filter: blur(40px);
  border-radius: 5px;
  margin-top: 2rem;

  h1 {
    font-size: 6rem;
    font-weight: bold;
    color: #fbed26;
    opacity: 0.8;
  }
`;

const NotFoundPage = () => (
  <Container>
      <h1>404</h1>
      <h2>Page not Found</h2>
      <br />
      <HelpLink link="/" linkText="Go Home" text="You can " />
    </Container>
);

export default NotFoundPage;
