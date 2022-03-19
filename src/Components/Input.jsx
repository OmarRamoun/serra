import PropTypes from 'prop-types';

const Input = ({ id, type, title, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input
        autoComplete={id}
        id={id}
        name={id}
        type={type}
        placeholder={title}
        required
        {...props}
      />
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Input;
