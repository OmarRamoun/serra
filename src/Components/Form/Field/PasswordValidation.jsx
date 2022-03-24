import FormContext from '../../../Contexts/FormContext';
import { useContext } from 'react';

import { FaCheck, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';


const Container = styled.div`
  background: rgba(17, 30, 49, 0.8);
`;

const PasswordValidationNote = () => {

  const { signupForm: { newPassword : { valid } } } = useContext(FormContext);

  return (
    <Container id="pwdnote">
      <p>
        <span>1.</span>
        {valid.length ? <FaCheck /> : <FaTimes />}
        The password must contain at least 8 characters.
      </p>
      <p>
        <span>2.</span>
        {valid.uppercase ? <FaCheck /> : <FaTimes />}
        The password must contain at least 1 uppercase character.
      </p>
      <p>
        <span>3.</span>
        {valid.lowercase ? <FaCheck /> : <FaTimes />}
        The password must contain at least 1 lowercase character.
      </p>
      <p>
        <span>4.</span>
        {valid.digits ? <FaCheck /> : <FaTimes />}
        The password must contain at least 1 number.
      </p>
      <p>
        <span>5.</span>
        {valid.specialChar ? <FaCheck /> : <FaTimes />}
        The password must contain at least 1 special character.
      </p>
      <p>
        <span>6.</span>
        {!valid.noSpace ? <FaCheck /> : <FaTimes />}
        The password must not contain any spaces.
      </p>
    </Container>
  )
}

export default PasswordValidationNote;

/* Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span> */
