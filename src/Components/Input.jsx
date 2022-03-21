import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import TextBox from './TextBox';
import ValidationNote from './ValidationNote';


const Input = forwardRef((
  { id, title, ...props }, ref) => {

  return (
    <div style={{width: "100%"}}>
      <Label title={title} id={id} validate valid />
      <TextBox
        id={id}
        title={title}
        ref={ref}
        {...props}
      />
      <ValidationNote />
    </div>
  )
});

Input.defaultProps = {
  type: 'text',
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Input;

/**
 * Input component
 * |
 * |- Label
 * |- TextBox
 * |  |
 * |  |- Icon
 * |  |- input
 * |  |- ShowPass
 * |
 * |- ValidationNote
 */
