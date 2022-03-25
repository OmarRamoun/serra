import { login } from '../features/user';
import useFormChangeHandler from '../Hooks/useFormChangeHandler';
import { useState, createContext, useRef, useContext, useEffect } from "react";
import { useDispatch } from 'react-redux';
import axios from '../Api/axios';


const LoginContext = createContext({});
const LOGIN_URL = '/login';
const READ_URL = '/read';

export const useLogin = () => {
  return useContext(LoginContext);
};

export const LoginContextProvider = ({ children }) => {

  const dispatch = useDispatch();
  const errRef = useRef(null);

  const [loginForm, setLoginForm] = useState({
    currentEmail: { fieldValue: "" },
    currentPassword: { fieldValue: "" }
  });
  const [errMsg, setErrMsg] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleFormChange = useFormChangeHandler(setLoginForm);

  useEffect(() => {
    setErrMsg("");
  }, [loginForm])

  const handleLoginValueChange = event => {
    handleFormChange(event, "fieldValue", event.target.value);
  };

  const clearLoginForm = () => {
    setLoginForm({
      currentEmail: { fieldValue: "" },
      currentPassword: { fieldValue: "" }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({
          email: loginForm.currentEmail.fieldValue,
          password: loginForm.currentPassword.fieldValue
        })
      );
      const sessionId = response?.data?.session?.id;
      let readResponse = await axios.post(READ_URL,
        JSON.stringify({
          email: loginForm.currentEmail.fieldValue,
        })
      );
      const { username, profile } = readResponse.data.account;
      dispatch(login({
        email: loginForm.currentEmail.fieldValue,
        username,
        sessionId,
        newsletter: Boolean(profile.newsletter)
      }));
      clearLoginForm();
      setLoginSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else {
        setErrMsg('Wrong Email or Password');
      }
      errRef.current.focus();
    }
  };

  return (
    <LoginContext.Provider value={
      {
        loginForm,
        handleLoginValueChange,
        loginSuccess,
        handleSubmit,
        errMsg,
        errRef
      }
    }>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
