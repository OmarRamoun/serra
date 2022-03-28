import { useSignup } from "../../../Hooks/contextHooks";

import { FaCheck, FaTimes } from "react-icons/fa";
import styled from "styled-components";


const Container = styled.div``;

const StyledP = styled.p`
  display: flex;
  gap: 0.4rem;
  align-items: flex-start;
  margin-bottom: 0.5rem;

  > :first-child {
    margin-top: 0.1rem;
    flex: 0 0 1rem;
  }
`;

const CheckIcon = styled(FaCheck)`
  color: #00c853;
`;

const TimesIcon = styled(FaTimes)`
  color: #f44336;
`;

const PasswordValidationNote = () => {

  const { signupForm: { newPassword: { valid } } } = useSignup();

  return (
    <Container id="pwdnote">
      <StyledP>
        {valid.length ? <CheckIcon /> : <TimesIcon />}
        The password must contain at least 8 characters.
      </StyledP>
      <StyledP>
        {valid.uppercase ? <CheckIcon /> : <TimesIcon />}
        The password must contain at least 1 uppercase character.
      </StyledP>
      <StyledP>
        {valid.lowercase ? <CheckIcon /> : <TimesIcon />}
        The password must contain at least 1 lowercase character.
      </StyledP>
      <StyledP>
        {valid.digits ? <CheckIcon /> : <TimesIcon />}
        The password must contain at least 1 number.
      </StyledP>
      <StyledP>
        {valid.specialChar ? <CheckIcon /> : <TimesIcon />}
        The password must contain at least 1 special character.
        Allowed special characters:
      </StyledP>
      <StyledP>
        {!valid.noSpace ? <CheckIcon /> : <TimesIcon />}
        The password must not contain any spaces.
      </StyledP>
    </Container>
  )
}

export default PasswordValidationNote;
