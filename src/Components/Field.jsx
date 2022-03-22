import Input from './Input';
import ValidationNote from './ValidationNote';
import { forwardRef } from 'react';

import PropTypes from 'prop-types';


const Field = forwardRef(({ fieldType, ...props }, ref) => {

  let inputProps = { ref: ref }
  switch (fieldType) {
    case "email":
      inputProps = {
        ...inputProps,
        type: "email",
        title: "E-Mail Address",
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
      >
        
      </p> */}
      {props.validate &&
        <ValidationNote
          fieldType={fieldType}
          valid={props.valid}
          ariaId={props.ariaId}
          value={props.value}
          focus={props.focus}
        />
      }
    </>
  )
});

Field.defaultProps = {
  fieldType: "username",
};

Field.propTypes = {
  fieldType: PropTypes.string,
}

export default Field;
