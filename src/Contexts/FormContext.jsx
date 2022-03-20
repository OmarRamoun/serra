import { useState, useEffect, createContext } from "react";
import { USERNAME_REGEX, EMAIL_REGEX, PASSWORD_REGEX } from '../Validations/regex';


const FormContext = createContext({});

export const FormContextProvider = ({ children }) => {

  const initialValue = {
    fieldValue: "",
    valid: false,
    focus: false
  };

  const [loginForm, setLoginForm] = useState({
    email: { ...initialValue, focus: true },
    currentPassword: { ...initialValue }
  });

  const [signupForm, setSignupForm] = useState({
    username: { ...initialValue, focus: true },
    email: { ...initialValue },
    newPassword: { ...initialValue },
    confirmPassword: { ...initialValue },
    newsLetter: false,
    terms: false
  });

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const result = EMAIL_REGEX.test(signupForm.email.fieldValue);
    setSignupForm(prevState => ({
      ...prevState,
      email: {
        ...prevState.email,
        valid: result
      }
    }));
  }, [signupForm.email.fieldValue]);

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
    const result = PASSWORD_REGEX.test(signupForm.newPassword.fieldValue);
    console.log(result);
    setSignupForm(prevState => ({
      ...prevState,
      newPassword: {
        ...prevState.newPassword,
        valid: result
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

  const handleChange = (event, setFunction, field, value) => {
    const { name, type, checked } = event.target;
    setFunction(prevLoginForm => {
      return {
        ...prevLoginForm,
        [name]: type === "checkbox" ?
          checked :
          { ...prevLoginForm[name], [field]: value }
      };
    });
  };

  const handleValueChange = (event, setFunction) => {
    handleChange(event, setFunction, "fieldValue", event.target.value);
  };

  const handleFocusChange = (event, setFunction, value) => {
    handleChange(event, setFunction, "focus", value);
  };

  const handleSignupFormChange = event => {
    handleValueChange(event, setSignupForm);
  };

  const handleLoginFormChange = event => {
    handleValueChange(event, setLoginForm);
  };

  const handleSignupFormFocusChange = (event, value) => {
    handleFocusChange(event, setSignupForm, value);
  };

  const handleLoginFormFocusChange = (event, value) => {
    handleFocusChange(event, setLoginForm, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USERNAME_REGEX.test(signupForm.username.fieldValue);
    const v2 = PASSWORD_REGEX.test(signupForm.newPassword.fieldValue);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    setSuccess(true);
  }

  console.log(Object.entries(signupForm).map(([k, v]) => v.focus));

  return (
    <FormContext.Provider value={{
      success,
      errMsg,
      loginForm,
      signupForm,
      handleLoginFormChange,
      handleSignupFormChange,
      handleLoginFormFocusChange,
      handleSignupFormFocusChange,
      handleSubmit
    }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;