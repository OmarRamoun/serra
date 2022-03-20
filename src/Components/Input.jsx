import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { FaCheck, FaTimes } from 'react-icons/fa';


const Input = forwardRef(({ id, type, title, valid, ...props }, ref) => {
  return (
    <div>
      <label htmlFor={id}>
        {title}
        {valid && <FaCheck />}
        {!valid && <FaTimes />}
      </label>
      <input
        autoComplete={id}
        id={id}
        name={id}
        type={type}
        placeholder={title}
        required
        ref={ref}
        {...props}
      />
    </div>
  )
});

Input.defaultProps = {
  type: 'text',
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Input;
