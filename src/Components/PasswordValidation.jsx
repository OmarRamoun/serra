import { FaCheck, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';


const Container = styled.div`
  background: rgba(17, 30, 49, 0.8);
`;

const PasswordValidationNote = () => {
  return (
    <Container id="pwdnote">
      {/* <p><span>1.</span> <FaCheck> The password must contain at least 8 characters.</p>
      <p><span>2.</span> <FaCheck> The password must contain at least 1 uppercase character.</p>
      <p><span>3.</span> <FaCheck> The password must contain at least 1 lowercase character.</p>
      <p><span>4.</span> <FaCheck> The password must contain at least 1 number.</p>
      <p><span>5.</span> <FaCheck> The password must contain at least 1 special character.</p>
      <p><span>6.</span> <FaCheck> The password must not contain any spaces.</p> */}
    </Container>
  )
}

export default PasswordValidationNote;

/* Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span> */
