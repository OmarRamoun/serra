import { login, logout } from '../features/user';
import useFormChangeHandler from '../Hooks/useFormChangeHandler';
import { useState, createContext, useRef, useContext, useEffect } from "react";
import { useDispatch } from 'react-redux';
import axios from '../Api/axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const LoginContext = createContext({});
const LOGIN_URL = '/login';
const LOGOUT_URL = '/logout';
const READ_URL = '/read';

export const useLogin = () => {
  return useContext(LoginContext);
};

export const LoginContextProvider = ({ children }) => {

  const user = useSelector((state) => state.user.value);

  const dispatch = useDispatch();
  const errRef = useRef(null);
  const navigate = useNavigate();

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
      navigate('/' + username);
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

  const handleLogout = async (e) => {
    try {
      const response = await axios.post(LOGOUT_URL,
        JSON.stringify({
          sessionId: user.sessionId
        })
      );
      dispatch(logout());
      navigate('/');
      console.log("button clicked");
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else {
        setErrMsg('Refresh Page');
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
        handleLogout,
        errMsg,
        errRef
      }
    }>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
