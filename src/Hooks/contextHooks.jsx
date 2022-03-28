import SignupContext from "../Contexts/SignupContext";
import LoginContext from "../Contexts/LoginContext";

import { useContext } from "react";

export const useSignup = () => {
  return useContext(SignupContext);
}

export const useLogin = () => {
  return useContext(LoginContext);
};
