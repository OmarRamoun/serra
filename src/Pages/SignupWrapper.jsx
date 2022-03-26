import { SignupContextProvider } from "../Contexts/SignupContext";

import Signup from "./Signup";

const LoginWrapper = () => {
  return (
    <SignupContextProvider>
      <Signup />
    </SignupContextProvider>
  )
};

export default LoginWrapper;
