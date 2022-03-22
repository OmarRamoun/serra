import PropTypes from 'prop-types'

const Button = ({ form, children, ...props }) => {
  return (
    <button
      disabled={
        !form.username.valid ||
        !form.email.valid ||
        !form.newpassword.valid ||
        !form.confirmPassword.valid
      }
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
