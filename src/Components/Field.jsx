import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';


const Field = forwardRef(({ type, ...props }, ref) => {

  let inputProps = {}
  switch (type) {
    case "email":
      inputProps = {
        type: "email",
        title: "E-Mail",
        id: "email",
        ref: ref,
      }
      break;
    case "new-pass":
      inputProps = {
        type: "password",
        title: "Password",
        id: "newPassword",
        ref: { ref },
      }
      break;
    case "current-pass":
      inputProps = {
        type: "password",
        title: "Password",
        id: "currentPassword",
        ref: { ref },
      }
      break;
    case "confirm-pass":
      inputProps = {
        type: "password",
        title: "Confirm Password",
        id: "confirmPassword",
        ref: { ref },
      }
      break;
    default:
      inputProps = {
        type: "text",
        title: "Username",
        id: "username",
        ref: { ref },
      }
      break;
  }

  return (
    <Input {...inputProps} {...props} />
  )
});

Field.propTypes = {
  type: PropTypes.string,
}

export default Field;
