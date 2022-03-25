import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const ErrorBox = forwardRef(({ errMsg }, ref) => {
  return (
    <p
      ref={ref}
      style={
        errMsg ? {
          background: '#f00',
          color: '#fff',
          padding: '10px',
        } : {
          display: 'none',
        }
      }
      aria-live="assertive"
    >
      {errMsg}
    </p>
  )
});

ErrorBox.propTypes = {
  errMsg: PropTypes.string
}

export default ErrorBox;
