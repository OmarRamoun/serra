import { LoginContextProvider } from "../Contexts/LoginContext";
import Login from "./Login";

const LoginWrapper = () => {
  return (
    <LoginContextProvider>
      <Login />
    </LoginContextProvider>
  )
};

export default LoginWrapper;
