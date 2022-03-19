import PropTypes from 'prop-types';

const Input = ({ id, type, title, ...props }) => {
  return (
    <div>
      <label htmlfor={id}>{title}</label>
      <input
        autofocus={props.focus}
        autoComplete={id}
        id={id}
        name={id}
        type={type}
        placeholder={title}
        required
      />
    </div>
  )
}

Input.defaultProps = {
  focus: false,
  type: 'text',
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  focus: PropTypes.bool,
}

export default Input;
