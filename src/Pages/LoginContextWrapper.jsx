import { LoginContextProvider } from "../Contexts/LoginContext";

const LoginWrapper = ({ component: Component }) => {
  return (
    <LoginContextProvider>
      <Component />
    </LoginContextProvider>
  )
};

export default LoginWrapper;
