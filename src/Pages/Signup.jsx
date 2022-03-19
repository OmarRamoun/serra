import Form from '../Components/Form';
import Heading from '../Components/Heading';
import Field from '../Components/Field';
import CheckboxContainer from '../Components/CheckboxContainer';
import HelpLink from '../Components/HelpLink';
import { useContext } from 'react';
import FormContext from '../Contexts/FormContext';

const Signup = () => {

  const { signupForm, handleSignupFormChange } = useContext(FormContext);

  return (
    <Form>
      <Heading>signup</Heading>
      <Field
        autoFocus
        value={signupForm.username}
        onChange={handleSignupFormChange}
      />
      <Field
        type="email"
        value={signupForm.email}
        onChange={handleSignupFormChange}
      />
      <Field
        type="new-pass"
        value={signupForm.newPassword}
        onChange={handleSignupFormChange}
      />
      <Field
        type="confirm-pass"
        value={signupForm.confirmPassword}
        onChange={handleSignupFormChange}
      />

      <CheckboxContainer />

      <button
        type="submit"
        aria-label="Sign Up"
      >
        SIGNUP
      </button>
      <HelpLink text="Already Have an Account?" linkText="Login" link="#" />
    </Form>
  )
}

export default Signup;
