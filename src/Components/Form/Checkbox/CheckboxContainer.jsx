import Checkbox from './Checkbox';
import { useSignup } from '../../../Hooks/contextHooks';

const CheckboxContainer = () => {

  const { signupForm, handleSignupValueChange } = useSignup();

  return (
    <section style={{marginBlock : "0.9rem"}}>
      <Checkbox
        id="newsLetter"
        text="I want to receive news about Synergy of Serra"
        checked={signupForm.newsLetter}
        onChange={handleSignupValueChange}
      />
      <Checkbox
        id="terms"
        data-testid="terms"
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
