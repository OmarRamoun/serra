import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  color: #000;
  font-family: 'Nova Flat', cursive ,sans-serif;
  font-size: 1.5em;
  font-weight: bolder;
  margin: 0.2rem;
  padding: 0.9rem 2.5rem;
  transform: skewX(-25deg);
  text-decoration: none;
  transition-duration: 0ms;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  &:hover {
    border-color: #999;
    color: #3b3b3b;
    background: rgb(255, 208, 38);
  }
  &:active {
    background: #eaeaea;
    border-color: #999;
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
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
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
  font-family: 'Nova Flat', cursive ,sans-serif;
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
  form: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

export default Button;
