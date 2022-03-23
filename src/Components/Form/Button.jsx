import PropTypes from 'prop-types'

const Button = ({ children, ...props }) => {
  return (
    <button
      
      {...props}
    >
      {children}
    </button>

  )
}

Button.proptTypes = {
  form: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

export default Button;
