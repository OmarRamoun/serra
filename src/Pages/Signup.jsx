import Heading from '../Components/Heading';
import Field from '../Components/Field';
import CheckboxContainer from '../Components/CheckboxContainer';
import HelpLink from '../Components/HelpLink';

const Signup = () => {
  return (
    <form>
      <Heading>signup</Heading>
      <Field focus />
      <Field type="email" />
      <Field type="new-pass" />
      <Field type="confirm-pass" />

      <CheckboxContainer />

      <button
        type="submit"
        aria-label="Sign Up"
      >
        SIGNUP
      </button>
      <HelpLink text="Already Have an Account?" linkText="Login" link="#" />
    </form>
  )
}

export default Signup;
