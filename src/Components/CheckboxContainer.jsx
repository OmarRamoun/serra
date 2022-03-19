import Checkbox from "./Checkbox";
import { useContext } from "react";
import FormContext from "../Contexts/FormContext";

const CheckboxContainer = () => {

  const { signupForm, handleSignupFormChange } = useContext(FormContext);

  return (
    <section>
      <Checkbox
        id="newsLetter"
        text="I want to receive news about Synergy of Serra"
        checked={signupForm.newsLetter}
        onChange={handleSignupFormChange}
      />
      <Checkbox
        id="terms"
        text="I read and agree to the"
        linkText="Terms of Service"
        link="#"
        checked={signupForm.terms}
        onChange={handleSignupFormChange}
      />
    </section>
  )
}
export default CheckboxContainer;
