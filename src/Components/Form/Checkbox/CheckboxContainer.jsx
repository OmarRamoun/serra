import Checkbox from "./Checkbox";
import { useSignup } from "../../../Contexts/SignupContext";

const CheckboxContainer = () => {

  const { signupForm, handleSignupValueChange } = useSignup();

  return (
    <section>
      <Checkbox
        id="newsLetter"
        text="I want to receive news about Synergy of Serra"
        checked={signupForm.newsLetter}
        onChange={handleSignupValueChange}
      />
      <Checkbox
        id="terms"
        text="I read and agree to the"
        linkText="Terms of Service"
        link="#"
        checked={signupForm.terms}
        onChange={handleSignupValueChange}
      />
    </section>
  )
}

export default CheckboxContainer;
