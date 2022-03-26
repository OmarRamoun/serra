// add a glassmorphic div to the Home component with cool colors
import home from '../Assets/Images/home-bg.jpg';
import Button from '../Components/Button';

import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const StyledHome = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  background: url(${home});
  background-size: 100% 100%;
  box-shadow: inset 0 0 40px 48px rgba(0, 0, 0, 0.8);
  clip-path: polygon(0px 0px, calc(17%) 0px, calc(20%) 3rem, calc(80%) 3rem, calc(83%) 0px, 100% 0px, 100% 100%, calc(83%) 100%, calc(80%) calc(100% - 3rem), calc(20%) calc(100% - 3rem), calc(17%) 100%, 0px 100%);
  opacity: 0.9;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0.9) 90%);
  }
  h1 {
    font-size: 5rem;
    font-weight: 300;
    margin-bottom: 1rem;
    font-family: 'Nova Flat', cursive ,sans-serif;
    text-shadow: rgb(12 11 19) 2px 2px 4px;
    /* opacity: 1; */
  }
  p {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }
  a {
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
      <h1>Synergy Of Serra</h1>
      <p>Welcome to the best TCG lore on the internet</p>
      <div style={{display: "flex"}}>
        <Button as={Link} to="/signup" style={{zIndex: "100", }}>Sign Up</Button>
        <Button as={Link} to="/login" style={{zIndex: "100", }}>Log In</Button>
        {user.isLoggedIn && <Button as={Link} to={`/${user.username}`} style={{zIndex: "100", }}>My Profile</Button>}
      </div>
    </StyledHome>
  )
}

export default Home;
