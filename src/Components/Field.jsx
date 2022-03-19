import PropTypes from 'prop-types';
import Input from './Input';


const Field = ({ type, ...props }) => {
  return (
    <>
      {
        type === 'email' ?
          <Input id="email" type="email" title="E-Mail Adddress" {...props} /> :

        type === 'new-pass' ?
          <Input id="newPassword" type="password" title="Password" {...props} /> :

        type === 'current-pass' ?
          <Input id="currentPassword" type="password" title="Password" {...props} /> :

        type === 'confirm-pass' ?
          <Input id="confirmPassword" type="password" title="Confirm Password" {...props} /> :

          <Input id="username" type="text" title="Username" {...props} />
      }
    </>
  )
}

Field.propTypes = {
  type: PropTypes.string,
}

export default Field;
