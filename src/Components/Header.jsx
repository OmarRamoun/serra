import styled from 'styled-components';
import logo from '../Assets/Images/logo.png';
import { FlexCenter } from "../Styles/Flex.styles";
import { ThinBorder } from "../Styles/Layout.styles";
import { Link } from 'react-router-dom';


const StyledHeader = styled.header`
  ${FlexCenter}
  position: sticky;
  z-index: 1000;
  top: 0;
  width: 100%;
  padding: 0.6rem 0;
  border-bottom: ${ThinBorder} rgba(199, 199, 199, 0.1);
  backdrop-filter: blur(20px);
  /* background-color: rgba(12, 11, 19, 0.315); */
  /* background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.9) 10%,
    rgba(0,0,0,0.5) 80%,
    rgba(0,0,0,0) 100%
  ); */
  /* box-shadow: 5px 0 10px rgba(0,0,0,0.6); */
    ${({ theme }) => theme.media.mobile} {
      padding-top: 0.3rem;
      padding-bottom: 0.3rem;
    }
`;

const Logo = styled.img`
  height: 3.5rem;
  ${({ theme }) => theme.media.mobile} {
    height: 2.5rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader data-testid="header">
      <Link to="/">
        <Logo data-testid="logo" src={logo} alt="Synergy of Serra Logo" />
      </Link>
    </StyledHeader>
  )
}

export default Header;
