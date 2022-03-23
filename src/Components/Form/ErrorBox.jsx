import PropTypes from 'prop-types';

const ErrorBox = ({ errMsg }) => {
  return (
    <p
      ref="{errorMsgRef}"
      classname={errMsg ? "err" : "offscreen"}
      aria-live="assertive"
    >
      {errMsg}
    </p>
  )
}

ErrorBox.propTypes = {
  errMsg: PropTypes.string.isRequired
}

export default ErrorBox;
