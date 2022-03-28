import Account from "../Api/Account";
import { useState, useEffect, createContext, useRef } from "react";
import { USERNAME_REGEX, EMAIL_REGEX } from '../Validations/regex';
import { useForm, usePasswordRegex } from "../Hooks/formHooks";


const SignupContext = createContext({});

export const SignupContextProvider = ({ children }) => {

  const usernameRef = useRef();
  const errMsgRef = useRef();

  const initialValue = {
    fieldValue: "",
    valid: false,
    focus: false
  };
  const [ signupForm, handleChange, resetForm, getValue, setFieldValid ] = useForm({
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

  const username = getValue("username");
  const newEmail = getValue("newEmail");
  const newPassword = getValue("newPassword");
  const confirmPassword = getValue("confirmPassword");
  const newsletter = signupForm.newsletter;

  const passwordRegex = usePasswordRegex(newPassword);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [signupForm]);
  useEffect(() => {
    const result = USERNAME_REGEX.test(username);
    setFieldValid("username", result);
    /* eslint-disable-next-line */
  }, [username]);
  useEffect(() => {
    const result = EMAIL_REGEX.test(newEmail);
    setFieldValid("newEmail", result);
    /* eslint-disable-next-line */
  }, [newEmail]);
  useEffect(() => {
    setFieldValid("newPassword", passwordRegex);
    const match = newPassword === confirmPassword;
    setFieldValid("confirmPassword", passwordRegex.result && match);
    /* eslint-disable-next-line */
  }, [newPassword, confirmPassword]);

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
