import { Size } from '../Styles/Layout.styles';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 0.2rem;
  padding: 0.9rem 2.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  transform: skewX(-25deg);
  user-select: none;
  color: ${({ theme }) => theme.colors.secondary};
  background: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5em;
  font-weight: bolder;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border-color: #fff020;
    color: #3b3b3b;
    background: ${({ theme }) => theme.colors.primary};
    cursor: default;
  }
  &:active {
    background: #eaeaea;
    color: #000;
    transform: translateY(4px) scale(0.95) skewX(-25deg);
  }
  &:disabled {
    background: #eee;
    border-color: #999;
    color: #999;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 8px;
    ${Size(100)};
    opacity: 0;
    transition: all 0.5s;
    box-shadow: 0 0 10px 40px white;
  }
  &:active:after {
    box-shadow: 0 0 0 0 white;
    position: absolute;
    border-radius: 8px;
    left: 0;
    top:0;
    opacity: 1;
    transition: 0s;
  }
`;

const ButtonText = styled.h4`
  transform: skewX(25deg);
`;

const Button = ({ children, ...props }) => {
  return (
    <StyledButton
      {...props}
    >
      <ButtonText>
        {children}
      </ButtonText>
    </StyledButton>

  )
}

Button.proptTypes = {
  children: PropTypes.node.isRequired
}

export default Button;
