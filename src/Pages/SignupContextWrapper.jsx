import { SignupContextProvider } from "../Contexts/SignupContext";

const LoginWrapper = ({ element }) => {
  return (
    <SignupContextProvider>
      {element}
    </SignupContextProvider>
  )
};

export default LoginWrapper;
