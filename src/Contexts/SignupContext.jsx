import Account from "../Api/Account";
import { useState, useEffect, createContext, useRef } from "react";
import { USERNAME_REGEX, EMAIL_REGEX, PASSWORD_REGEX } from '../Validations/regex';
import { useForm } from "../Hooks/useForm";
// import { useAuth } from '../Hooks/useAuth';


const SignupContext = createContext({});

export const SignupContextProvider = ({ children }) => {

  const usernameRef = useRef();
  const errMsgRef = useRef();

  const initialValue = {
    fieldValue: "",
    valid: false,
    focus: false
  };
  const [ signupForm, handleChange, resetForm, validateForm ] = useForm({
    username: { ...initialValue, focus: true },
    newEmail: { ...initialValue },
    newPassword: {
      ...initialValue, valid: {
        length: false,
        uppercase: false,
        lowercase: false,
        digits: false,
        specialChar: false,
        noSpace: false,
        result: false
      }
    },
    confirmPassword: { ...initialValue },
    newsletter: false,
    terms: false
  });
  const [errMsg, setErrMsg] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  const getValue = field => signupForm[field].fieldValue;
  const username = getValue("username");
  const newEmail = getValue("newEmail");
  const newPassword = getValue("newPassword");
  const newsletter = signupForm.newsletter;

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [signupForm]);
  useEffect(() => {
    const result = USERNAME_REGEX.test(signupForm.username.fieldValue);
    validateForm("username", result);
    /* eslint-disable-next-line */
  }, [signupForm.username.fieldValue]);
  useEffect(() => {
    const result = EMAIL_REGEX.test(signupForm.newEmail.fieldValue);
    validateForm("newEmail", result);
    /* eslint-disable-next-line */
  }, [signupForm.newEmail.fieldValue]);
  useEffect(() => {
    const lengthResult = PASSWORD_REGEX.length.test(signupForm.newPassword.fieldValue);
    const uppercaseResult = PASSWORD_REGEX.uppercase.test(signupForm.newPassword.fieldValue);
    const lowercaseResult = PASSWORD_REGEX.lowercase.test(signupForm.newPassword.fieldValue);
    const digitsResult = PASSWORD_REGEX.digits.test(signupForm.newPassword.fieldValue);
    const specialCharResult = PASSWORD_REGEX.specialChar.test(signupForm.newPassword.fieldValue);
    const noSpaceResult = PASSWORD_REGEX.noSpace.test(signupForm.newPassword.fieldValue);
    const result = lengthResult && uppercaseResult && lowercaseResult && digitsResult && specialCharResult && !noSpaceResult;

    const passwordValidations = {
      length: lengthResult,
      uppercase: uppercaseResult,
      lowercase: lowercaseResult,
      digits: digitsResult,
      specialChar: specialCharResult,
      noSpace: noSpaceResult,
      result: result
    }

    validateForm("newPassword", passwordValidations);

    const match = signupForm.newPassword.fieldValue === signupForm.confirmPassword.fieldValue;
    validateForm("confirmPassword", result && match);
    /* eslint-disable-next-line */
  }, [
    signupForm.newPassword.fieldValue,
    signupForm.confirmPassword.fieldValue,
  ]);

  const handleSignupFocusChange = (event, value) => {
    handleChange(event, "focus", value);
  };
  const handleSignupValueChange = event => {
    handleChange(event, "fieldValue", event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Account.signup(username, newEmail, newPassword, newsletter);
      setSignupSuccess(true);
      resetForm();
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Network Error");
      } else if (err.response?.status === 400) {
        setErrMsg(err.response.data.detail);
      } else {
        setErrMsg('Registration Failed')
      }
      errMsgRef.current.focus();
    }
  }

  return (
    <SignupContext.Provider value={{
      signupSuccess,
      errMsg,
      errMsgRef,
      usernameRef,
      signupForm,
      handleSignupValueChange,
      handleSignupFocusChange,
      handleSubmit
    }}>
      {children}
    </SignupContext.Provider>
  );
}

export default SignupContext;
