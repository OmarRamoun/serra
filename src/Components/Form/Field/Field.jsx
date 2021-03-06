import Input from './Input';
import ValidationNote from './ValidationNote';
import { forwardRef } from 'react';

import PropTypes from 'prop-types';


const Field = forwardRef(({ fieldType, valid, ...props }, ref) => {

  let inputProps = { ref: ref, valid: valid };
  switch (fieldType) {
    case 'current-email':
      inputProps = {
        type: 'email',
        title: 'E-Mail Address',
        id: 'currentEmail',
      };
      break;
    case "new-email":
      inputProps = {
        ...inputProps,
        type: "email",
        title: "E-Mail Address",
        id: "newEmail",
      }
      break;
    case "new-pass":
      inputProps = {
        ...inputProps,
        type: "password",
        title: "Password",
        id: "newPassword",
      }
      valid = valid.result;
      break;
    case "current-pass":
      inputProps = {
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
    <div>
      <Input {...inputProps} {...props} />
      {props.validate &&
        <ValidationNote
          fieldType={fieldType}
          valid={valid}
          ariaId={props.ariaId}
          value={props.value}
          focus={props.focus}
        />
      }
    </div>
  )
});

Field.defaultProps = {
  fieldType: "username",
  valid: false,
};

Field.propTypes = {
  fieldType: PropTypes.string,
  valid: PropTypes.any,
}

export default Field;
