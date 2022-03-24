import { useState, useEffect, createContext } from "react";
import { USERNAME_REGEX, EMAIL_REGEX, PASSWORD_REGEX } from '../Validations/regex';
import useFormChangeHandler from "../Hooks/useFormChangeHandler";
// import { useForm } from '../Hooks/useForm';
// import { useAuth } from '../Hooks/useAuth';
import axios from "../Api/axios";


const SignupContext = createContext({});

export const SignupContextProvider = ({ children }) => {

  const REGISTER = '/signup';


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
    email: { ...initialValue },
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USERNAME_REGEX.test(signupForm.username.fieldValue);
    // const v2 = PASSWORD_REGEX.test(signupForm.newPassword.fieldValue);
    // if (!v1 || !v2) {
    //   setErrMsg("Invalid Entry");
    //   return;
    // }
    try {
      const { username, email, newPassword: password, newsLetter: newsletter } = signupForm;
      const response = await axios.post(REGISTER,
        JSON.stringify({ username, email, password, newsletter }),
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        }
      );
      console.log(response.data);
      // setLoginSuccess(true);
      // clear input fields
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Network Error");
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed')
      }
    }
  }

  console.log(Object.entries(signupForm).map(([k, v]) => v.valid));

  return (
    <SignupContext.Provider value={{
      signupSuccess,
      errMsg,
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
