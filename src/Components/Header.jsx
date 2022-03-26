import styled from 'styled-components';
import logo from '../Assets/Images/logo.png';
import { FlexCenter } from "../Styles/Flex.styles";
import { Link } from 'react-router-dom';


const StyledHeader = styled.header`
  ${FlexCenter}
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.9) 10%,
    rgba(0,0,0,0.5) 80%,
    rgba(0,0,0,0) 100%
  );
`;

const Logo = styled.img`
  height: 4rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo src={logo} alt="Synergy of Serra Logo" />
      </Link>
    </StyledHeader>
  )
}

export default Header;
