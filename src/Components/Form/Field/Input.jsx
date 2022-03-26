import Label from './Label';
import TextBox from './TextBox';

import PropTypes from 'prop-types';
import { forwardRef } from 'react';


const Input = forwardRef(({ id, title, ...props }, ref) => {

  return (
    <div style={{ width: "100%" }}>
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

Input.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

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
 * ValidationNote
 */
