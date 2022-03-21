import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import TextBox from './TextBox';


const Input = forwardRef((
  { id, title, ...props }, ref) => {

  return (
    <div>
      <Label title={title} id={id} validate valid />
      <TextBox
        id={id}
        title={title}
        ref={ref}
        {...props}
      />
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
 * input component
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
