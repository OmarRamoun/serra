import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';


const Field = forwardRef(({ type, ...props }, ref) => {
  return (
    <>
      {
        type === 'email' ?
          <Input ref={ref} id="email" type="email" title="E-Mail Adddress" {...props} /> :

        type === 'new-pass' ?
          <Input ref={ref} id="newPassword" type="password" title="Password" {...props} /> :

        type === 'current-pass' ?
          <Input ref={ref} id="currentPassword" type="password" title="Password" {...props} /> :

        type === 'confirm-pass' ?
          <Input ref={ref} id="confirmPassword" type="password" title="Confirm Password" {...props} /> :

          <Input ref={ref} id="username" type="text" title="Username" {...props} />
      }
    </>
  )
});

Field.propTypes = {
  type: PropTypes.string,
}

export default Field;
