import { FaInfoCircle } from 'react-icons/fa';

import styled from 'styled-components';
import PropTypes from 'prop-types'


const Container = styled.div`
  display: flex;
  flex: 1;
`;

const ValidationNote = ({
  fieldType, valid, ariaId, value, focus
}) => {

  const showNote = focus && value && !valid;

  return (
    <Container>
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
              8 to 24 characters.<br />
              Must include uppercase and lowercase letters, a number and a special character.<br />
              Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
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
  valid: PropTypes.bool.isRequired,
  ariaId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  focus: PropTypes.bool.isRequired,
}

export default ValidationNote;
