import { FaCheck, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Label = ({ title, id, valid, validate }) => {
  return (
    <label htmlFor={id}>
      {title}
      {/* validate prop determins to validate (in case of signup) or not to validate (in case of login) */}
      {validate &&
        <>
          {valid && <FaCheck />}
          {!valid && <FaTimes />}
        </>
      }
    </label>
  )
};

Label.proptTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  valid: PropTypes.bool,
  validate: PropTypes.bool,
};

export default Label;
