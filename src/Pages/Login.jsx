import Heading from '../Components/Heading';
import Form from "../Components/Form";
import Field from "../Components/Field";
import HelpLink from "../Components/HelpLink";


const Login = () => {
  return (
    <Form>
      <Heading>login</Heading>
      <Field type="email" focus />
      <Field type="current-pass" />
      <button
        type="submit"
        aria-label="Log in"
      >
        LOGIN
      </button>
      <HelpLink text="Don't have an account yet?" linkText="Sign up" link="#" />
      <HelpLink text="Don't Remember Your Password?" linkText="Recover My Password" link="#" />
    </Form>
  )
}

export default Login;
