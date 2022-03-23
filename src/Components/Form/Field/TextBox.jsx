import { useContext, forwardRef, useState } from "react";
import FormContext from '../../../Contexts/FormContext';
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

const TextBox = forwardRef(
  ({
    id,
    type,
    title,
    valid,
    validate,
    ...props
  },
  ref
) => {

  const {
    handleLoginFormChange,
    handleSignupFormChange,
    handleSignupFormFocusChange,
    handleLoginFormFocusChange
  } = useContext(FormContext);

  const [showPass, setShowPass] = useState(false);

  return (
    <Container>
      <Icon type={type} />
      <StyledInput
        autoComplete={id}
        id={id}
        name={id}
        type={showPass ? "text" : type}
        placeholder={title}
        ref={ref}
        onChange={validate ? handleSignupFormChange : handleLoginFormChange}
        onFocus={e => validate ? handleSignupFormFocusChange(e, true) : handleLoginFormFocusChange(e, true)}
        onBlur={e => validate ? handleSignupFormFocusChange(e, false) : handleLoginFormFocusChange(e, false)}
        required
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
  valid: PropTypes.bool,
  validate: PropTypes.bool,
}

TextBox.defaultProps = {
  type: 'text',
  valid: false,
  validate: false,
}

export default TextBox;
