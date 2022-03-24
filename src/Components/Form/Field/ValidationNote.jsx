import { FaInfoCircle } from 'react-icons/fa';

import styled from 'styled-components';
import PropTypes from 'prop-types'
import PasswordValidationNote from './PasswordValidation';


const Container = styled.div`
  background: rgba(17, 30, 49, 0.8);
  padding: 20px;
  display: flex;
  flex: 1;
`;

const ValidationNote = ({
  fieldType, valid, ariaId, value, focus
}) => {

  const showNote = focus && value && !valid;

  return (
    <Container
      style={
        showNote ?
          { position: "relative" } :
          { position: "relative", left: "-9999px", height: "0px", padding: "0"}
      }
    >
      <div
        id={ariaId}
        className={showNote ? "instructions" : "offscreen"}
        aria-live="assertive"
      >
        {fieldType === "username" &&
          (
            <p>
              <FaInfoCircle />
              Username is required and must be between 3 and 20 characters.<br />
              Must begin with a letter.<br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
          )
        }

        {fieldType === "email" &&
          (
            <p>
              <FaInfoCircle />
              Email is required and must be a valid email address.<br />
            </p>
          )
        }

        {fieldType === "new-pass" &&
          (
            <p>
              <FaInfoCircle />
              {/* 8 to 24 characters.<br />
              Must include uppercase and lowercase letters, a number and a special character.<br />
              Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span> */}
              <PasswordValidationNote />
            </p>
          )
        }

        {fieldType === "confirm-pass" &&
          (
            <p>
              <FaInfoCircle />
              Must match the first password input field.
            </p>
          )
        }
      </div>
    </Container>
  )
}

ValidationNote.defaultProps = {
  fieldType: "username",
}

ValidationNote.propTypes = {
  fieldType: PropTypes.string,
  ariaId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  focus: PropTypes.bool.isRequired,
}

export default ValidationNote;
