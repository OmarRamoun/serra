// add a glassmorphic div to the Home component with cool colors

import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const StyledHome = styled.div`
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

const Home = () => {

  const user = useSelector((state) => state.user.value);

  return (
    <StyledHome>
      <h1>Home</h1>
      <p>This is the home page</p>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log IN</Link>
      {user.isLoggedIn && <Link to={`/${user.username}`}>My Profile</Link>}
    </StyledHome>
  )
}

export default Home;
