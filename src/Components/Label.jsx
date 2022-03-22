import { FaCheck, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledLabel = styled.label`
  /* hiding the label from the view */
  /* labels are meant only for screen readers */
  position: fixed;
  left: -9999px;
`;

const Label = ({ title, id, valid, validate }) => {
  return (
    <StyledLabel htmlFor={id} >
      {title}
      {/* validate prop determins to validate (in case of signup) or not to validate (in case of login) */}
      {validate &&
        <>
          {valid && <FaCheck />}
          {!valid && <FaTimes />}
        </>
      }
    </StyledLabel>
  )
};

Label.defaultProps = {
  valid: false,
  validate: false,
}

Label.proptTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  valid: PropTypes.bool,
  validate: PropTypes.bool,
};

export default Label;
