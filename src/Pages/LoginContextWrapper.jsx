import { LoginContextProvider } from "../Contexts/LoginContext";

const LoginWrapper = ({ element }) => {
  return (
    <LoginContextProvider>
      {element}
    </LoginContextProvider>
  )
};

export default LoginWrapper;
