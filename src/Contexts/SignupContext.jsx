import { useState, useEffect, createContext, useContext, useRef } from "react";
import { USERNAME_REGEX, EMAIL_REGEX, PASSWORD_REGEX } from '../Validations/regex';
import useFormChangeHandler from "../Hooks/useFormChangeHandler";
// import { useForm } from '../Hooks/useForm';
// import { useAuth } from '../Hooks/useAuth';
import axios from "../Api/axios";
import { v4 as uuidv4 } from 'uuid';


const SignupContext = createContext({});
const REGISTER_URL = '/create';

export const useSignup = () => {
  return useContext(SignupContext);
}

export const SignupContextProvider = ({ children }) => {

  const usernameRef = useRef();
  const errMsgRef = useRef();

  // const [form, handleChange, resetForm] = useForm({
  //     username: {
  //         value: '',
  //         validation: USERNAME_REGEX,
  //         touched: false,
  //         focus: false
  //     },
  //     email: {
  //         value: '',

  const initialValue = {
    fieldValue: "",
    valid: false,
    focus: false
  };

  const [signupForm, setSignupForm] = useState({
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
    newsLetter: false,
    terms: false
  });

  const [errMsg, setErrMsg] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleFormChange = useFormChangeHandler(setSignupForm);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [signupForm]);

  useEffect(() => {
    const result = USERNAME_REGEX.test(signupForm.username.fieldValue);
    setSignupForm(prevState => ({
      ...prevState,
      username: {
        ...prevState.username,
        valid: result
      }
    }));
  }, [signupForm.username.fieldValue]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(signupForm.newEmail.fieldValue);
    setSignupForm(prevState => ({
      ...prevState,
      newEmail: {
        ...prevState.newEmail,
        valid: result
      }
    }));
  }, [signupForm.newEmail.fieldValue]);

  useEffect(() => {
    const lengthResult = PASSWORD_REGEX.length.test(signupForm.newPassword.fieldValue);
    const uppercaseResult = PASSWORD_REGEX.uppercase.test(signupForm.newPassword.fieldValue);
    const lowercaseResult = PASSWORD_REGEX.lowercase.test(signupForm.newPassword.fieldValue);
    const digitsResult = PASSWORD_REGEX.digits.test(signupForm.newPassword.fieldValue);
    const specialCharResult = PASSWORD_REGEX.specialChar.test(signupForm.newPassword.fieldValue);
    const noSpaceResult = PASSWORD_REGEX.noSpace.test(signupForm.newPassword.fieldValue);
    const result = lengthResult && uppercaseResult && lowercaseResult && digitsResult && specialCharResult && !noSpaceResult;

    setSignupForm(prevState => ({
      ...prevState,
      newPassword: {
        ...prevState.newPassword,
        valid: {
          length: lengthResult,
          uppercase: uppercaseResult,
          lowercase: lowercaseResult,
          digits: digitsResult,
          specialChar: specialCharResult,
          noSpace: noSpaceResult,
          result: result
        }
      }
    }));
    const match = signupForm.newPassword.fieldValue === signupForm.confirmPassword.fieldValue;
    setSignupForm(prevState => ({
      ...prevState,
      confirmPassword: {
        ...prevState.confirmPassword,
        valid: result && match
      }
    }));
  }, [
    signupForm.newPassword.fieldValue,
    signupForm.confirmPassword.fieldValue
  ]);

  const handleSignupFocusChange = (event, value) => {
    handleFormChange(event, "focus", value);
  };

  const handleSignupValueChange = event => {
    handleFormChange(event, "fieldValue", event.target.value);
  };

  const clearForm = () => {
    setSignupForm({
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
      newsLetter: false,
      terms: false
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const id = uuidv4();
      let { username, newEmail: email, newPassword: password, newsLetter: newsletter } = signupForm;
      username = username.fieldValue;
      email = email.fieldValue;
      password = password.fieldValue;

      const response = await axios.post(REGISTER_URL,
        JSON.stringify({ id, username, email, password, profile: { newsletter: newsletter.toString() } }),
      );
      setSignupSuccess(true);
      clearForm();
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Network Error");
      } else if (err.response?.status === 400) {
        setErrMsg(err.response.data.detail);
      } else {
        setErrMsg('Registration Failed')
      }
    }
    errMsgRef.current.focus();
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
