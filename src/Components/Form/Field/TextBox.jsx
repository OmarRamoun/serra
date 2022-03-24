import { useContext, forwardRef, useState } from "react";
import LoginContext from '../../../Contexts/LoginContext';
import SignupContext from '../../../Contexts/SignupContext';
import Icon from './Icon';

import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  height: 1.6rem;
  font-size: 1rem;
  border-bottom: 1px solid rgb(125, 125, 140);
`;

const StyledInput = styled.input`
  flex: 1;
  background: #000;
  border: none;
  color: #fff;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-family: 'Exo 2' , sans-serif;
  outline: none;
`;

const TextBox = forwardRef((
  {
    id,
    type,
    title,
    validate,
    ...props
  },
  ref
) => {

  const { handleLoginValueChange } = useContext(LoginContext);
  const {
    handleSignupValueChange,
    handleSignupFocusChange
  } = useContext(SignupContext);

  const [showPass, setShowPass] = useState(false);

  const innerProps = validate && {
    onFocus: e => handleSignupFocusChange(e, true),
    onBlur:  e => handleSignupFocusChange(e, false),
    ref: ref
  };

  return (
    <Container>
      <Icon type={type} />
      <StyledInput
        autoComplete={id}
        id={id}
        name={id}
        type={showPass ? "text" : type}
        placeholder={title}
        onChange={
          validate ?
            handleSignupValueChange :
            handleLoginValueChange
        }
        required
        {...innerProps}
        {...props}
      />
      {type === "password" &&
        <Icon
          type="show"
          alt={showPass ? "Hide Password" : "Show Password"}
          clickable
          onClick={() => {
            setShowPass(!showPass);
          }}
        />
      }
    </Container>
  )
});

TextBox.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  validate: PropTypes.bool,
}

TextBox.defaultProps = {
  type: 'text',
  validate: false,
}

export default TextBox;
