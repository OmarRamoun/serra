import Account from '../Api/Account';
import { login, logout } from '../features/user';
import { useForm } from '../Hooks/formHooks';

import { useState, createContext, useRef, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const LoginContext = createContext({});

export const LoginContextProvider = ({ children }) => {

  const user = useSelector(state => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errMsgRef = useRef(null);

  const [ loginForm, handleChange, resetForm, getValue ] = useForm({
    currentEmail: { fieldValue: "" },
    currentPassword: { fieldValue: "" }
  });
  const [errMsg, setErrMsg] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const currentEmail = getValue("currentEmail");
  const currentPassword = getValue("currentPassword");


  useEffect(() => {
    setErrMsg("");
  }, [loginForm])

  const handleLoginValueChange = event => {
    handleChange(event, "fieldValue", event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const currentUser = await Account.login(currentEmail, currentPassword);
      dispatch(login({ ...currentUser }));
      resetForm();
      setLoginSuccess(true);
      navigate('/profile');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else {
        setErrMsg('Wrong Email or Password');
      }
      errMsgRef.current.focus();
    }
  };
  const handleLogout = async (e) => {
    try {
      await Account.logout({ sessionId: user.sessionId });
      dispatch(logout());
      navigate('/');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else {
        setErrMsg('Refresh Page');
      }
      errMsgRef.current.focus();
    }
  };


  return (
    <LoginContext.Provider value={
      {
        email: currentEmail,
        password: currentPassword,
        handleLoginValueChange,
        loginSuccess,
        handleSubmit,
        handleLogout,
        errMsg,
        errMsgRef
      }
    }>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
