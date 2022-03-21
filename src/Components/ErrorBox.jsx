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
export default ErrorBox
