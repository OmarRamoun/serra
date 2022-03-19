import { useState, createContext } from "react";

const FormContext = createContext({});

export const FormContextProvider = ({ children }) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    currentPassword: ""
  });

  const [signupForm, setSignupForm] = useState({
    username: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
    newsLetter: false,
    terms: false
  });

  const [isLogin, setIsLogin] = useState(false);

  const handleChange = (event, setFunction) => {
    const { name, value, type, checked } = event.target;
    setFunction(prevLoginForm => {
      return {
        ...prevLoginForm,
        [name]: type === "checkbox" ? checked : value
      };
    });
  };

  const handleSignupFormChange = event => {
    handleChange(event, setSignupForm);
  };

  const handleLoginFormChange = event => {
    handleChange(event, setLoginForm);
  };

  const handleLogin = () => {
    setIsLogin(true);
  };

  return (
    <FormContext.Provider value={{
      loginForm,
      signupForm,
      handleLoginFormChange,
      handleSignupFormChange
    }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;
