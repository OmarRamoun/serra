import { login } from '../features/user';
import useFormChangeHandler from '../Hooks/useFormChangeHandler';
import { useState, createContext, useRef, useContext } from "react";
import { useDispatch } from 'react-redux';
import axios from '../Api/axios';


const LoginContext = createContext({});
const LOGIN_URL = '/auth';

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
          password: loginForm.currentEmail.fieldValue
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      // console.log(JSON.stringify(response?.data));
      // const accessToken = response?.data?.accessToken;
      // const roles = response?.data?.roles;
      dispatch(login({
        email: loginForm.currentEmail.fieldValue,
        password: loginForm.currentPassword.fieldValue
      }));
      clearLoginForm();
      setLoginSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
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
