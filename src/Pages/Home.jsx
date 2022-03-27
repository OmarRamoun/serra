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
  background-attachment: fixed;
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
    font-family: 'Exo 2' ,sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }
  a {
    padding-left: 1rem;
    padding-right: 1rem;
    user-select:none;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s; /* Safari */

    /* transition-duration: 200ms; */
    transition-timing-function: ease;
    width: 180px;
    font-size: 1.5rem;
    font-weight: 300;
    text-decoration: none;
    margin-bottom: 1rem;
    border: 0;
    text-decoration: none;
    border-radius: 15px;
    background-color: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.1);
    backdrop-filter: blur(30px);
    color: rgba(255,255,255,0.8);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 50%;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 30%,
        rgba(255, 255, 255, 0.1) 90%);
        content: "";
    }

    :hover {
      transition-duration: 0.1s;
      /* background-color: rgba(255,255,255,0.2); */
      background-color: rgba(255, 217, 0, 0.231);
      border: 1px solid rgba(255,215,0,0.1);
      color: white;
    }

    :active {
      top: 1px;
    }

    :after {
      box-shadow: 0 0 0 0 white;
      position: absolute;
      border-radius: 4em;
      left: 0;
      top:0;
      opacity: 1;
      transition: 0s;
    }

  }
`;

const Home = () => {

  const user = useSelector((state) => state.user.value);

  return (
    <StyledHome>
      <h1>Synergy Of Serra</h1>
      <p>Welcome to the best TCG lore on the internet</p>
      <div style={{ display: "flex", gap: "0.6rem" }}>
        <Button as={Link} to="/signup" style={{ zIndex: "100", }}>Sign Up</Button>
        <Button as={Link} to="/login" style={{ zIndex: "100", }}>Log In</Button>
        {user.isLoggedIn && <Button as={Link} to={`/${user.username}`} style={{ zIndex: "100", }}>My Profile</Button>}
      </div>
    </StyledHome>
  )
}

export default Home;
