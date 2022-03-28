import { forwardRef, useState } from "react";
import { useLogin, useSignup } from "../../../Hooks/contextHooks";
import Icon from "./Icon";
import { ThinBorder } from "../../../Styles/Layout.styles";

import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  height: 1.8rem;
  border-bottom: ${ThinBorder} rgba(125, 125, 140, 0.5);
`;

const StyledInput = styled.input`
  flex: 1;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border: none;
  border-radius: 1px;
  outline: none;
  color: #fff;
  ${({ validate }) => console.log(validate)};
  background: ${({ valid, value, focus, validate }) => validate && !valid && value && !focus ? `#f04a4a4c` : `rgba(0,0,0,0.5)`};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 0.9rem;

  &:focus ~ img {
    filter: brightness(0.9);
  }
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

  const { handleLoginValueChange } = useLogin();
  const {
    handleSignupValueChange,
    handleSignupFocusChange
  } = useSignup();

  const [showPass, setShowPass] = useState(false);

  const innerProps = validate && {
    onFocus: e => handleSignupFocusChange(e, true),
    onBlur:  e => handleSignupFocusChange(e, false),
  };

  return (
    <Container>
      <Icon type={type} />
      <StyledInput
        validate={validate}
        autoComplete={id}
        id={id}
        name={id}
        type={showPass ? "text" : type}
        placeholder={title}
        ref={ref}
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
