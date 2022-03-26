import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #000;
  font-size: 1.5em;
  font-weight: bolder;
  margin: 1em;
  padding: 0.3em 1.6em;
  text-decoration: none;
  transition-duration: 0ms;
  &:hover {
    background: #dfdf78;
    border-color: #999;
    color: #000;
  }
  &:active {
    background: #eaeaea;
    border-color: #999;
    color: #000;
    transform: translateY(4px) scale(0.95);
  }

  &:disabled {
    background: #eee;
    border-color: #999;
    color: #999;
  }
`;

const Button = ({ children, ...props }) => {
  return (
    <StyledButton
      {...props}
    >
      {children}
    </StyledButton>

  )
}

Button.proptTypes = {
  form: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

export default Button;
