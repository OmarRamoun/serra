import Label from './Label';
import TextBox from './TextBox';

import PropTypes from 'prop-types';


const Input = ({ id, title, ref, ...props }) => {

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
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ref: PropTypes.object,
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
 * ValidationNote
 */
