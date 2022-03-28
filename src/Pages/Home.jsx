import StyledHome from './Home.styles';
import Button from '../Components/Button';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Home = () => {

  const user = useSelector(state => state.user.value);

  return (
    <StyledHome>
      <h1>Synergy Of Serra</h1>
      <p>Welcome to the best TCG lore on the internet</p>
      <div className='button-container'>
        <Button as={Link} to="/signup">Sign Up</Button>
        <Button as={Link} to="/login">Log In</Button>
        {user.isLoggedIn && <Button as={Link} to="/profile">My Profile</Button>}
      </div>
    </StyledHome>
  )
}

export default Home;
