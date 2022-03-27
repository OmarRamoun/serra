import { SignupContextProvider } from "../Contexts/SignupContext";

const LoginWrapper = ({ component: Component }) => {
  return (
    <SignupContextProvider>
      <Component />
    </SignupContextProvider>
  )
};

export default LoginWrapper;
