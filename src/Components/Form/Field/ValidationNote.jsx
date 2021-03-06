import PasswordValidationNote from './PasswordValidation';

import { FaInfoCircle } from 'react-icons/fa';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types'


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex: 1;
  background: linear-gradient(
    to bottom right,
    rgba(17, 30, 49, 0.3),
    rgba(17, 30, 49, 0.5)
  );
  backdrop-filter: blur(10px);
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  ${({showNote}) => !showNote && css`
    position: absolute;
    left: -9999px;
  `}
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.4rem;
`;

const ValidationNote = ({
  fieldType, valid, ariaId, value, focus
}) => {

  const showNote = focus && value && !valid;

  return (
    <Container
      showNote={showNote}
    >
      <InnerWrapper
        id={ariaId}
        aria-live="assertive"
      >
        {fieldType === "username" &&
          (<>
            <FaInfoCircle />
            Username is required and:<br />
            - Must be between 3 and 20 characters.<br />
            - Must begin with a letter.<br />
            - Letters, numbers, underscores, hyphens allowed.
          </>
          )
        }

        {fieldType === "new-email" &&
          (
            <>
              <FaInfoCircle />
              Email is required and must be a valid email address.
            </>
          )
        }

        {fieldType === "new-pass" &&
          (
            <PasswordValidationNote />
          )
        }

        {fieldType === "confirm-pass" &&
          (
            <>
              <FaInfoCircle />
              Must match the first password input field.
            </>
          )
        }
      </InnerWrapper>
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
  valid: PropTypes.bool.isRequired,
}

export default ValidationNote;
