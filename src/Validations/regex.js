const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const USERNAME_REGEX = /^[a-zA-Z0-9]{3,30}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// const PASSWORD_REGEX = {
//   minLength   : /.{8,}/,
//   uppercase   : /(?=.*?[A-Z])/,
//   lowercase   : /(?=.*?[a-z])/,
//   digits      : /(?=.*?[0-9])/,
//   specialChar : /(?=.*?[#?!@$%^&*-])/,
//   noSpace     : /(?=.*?[^\s])/
// }

export { EMAIL_REGEX, USERNAME_REGEX, PASSWORD_REGEX };
