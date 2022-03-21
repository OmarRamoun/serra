import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';


const Field = forwardRef(({ type, ...props }, ref) => {

  let inputProps = { ref: ref }
  switch (type) {
    case "email":
      inputProps = {
        ...inputProps,
        type: "email",
        title: "E-Mail",
        id: "email",
      }
      break;
    case "new-pass":
      inputProps = {
        ...inputProps,
        type: "password",
        title: "Password",
        id: "newPassword",
      }
      break;
    case "current-pass":
      inputProps = {
        ...inputProps,
        type: "password",
        title: "Password",
        id: "currentPassword",
      }
      break;
    case "confirm-pass":
      inputProps = {
        ...inputProps,
        type: "password",
        title: "Confirm Password",
        id: "confirmPassword",
      }
      break;
    default:
      inputProps = {
        ...inputProps,
        type: "text",
        title: "Username",
        id: "username",
      }
      break;
  }

  return (
    <>
      <Input {...inputProps} {...props} />
      {/* <p
        id="username-error-msg"
        className={!username.fieldValue && !username.valid && username.focus ? "offscreen" : "err"}
        aria-live="assertive"
      >
        {<FaInfoCircle />}
        Username is required and must be between 3 and 20 characters.
      </p> */}
    </>
  )
});

Field.propTypes = {
  type: PropTypes.string,
}

export default Field;
