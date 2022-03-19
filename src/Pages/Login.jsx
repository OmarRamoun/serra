import Heading from '../Components/Heading';
import Form from "../Components/Form";
import Field from "../Components/Field";
import HelpLink from "../Components/HelpLink";
import { useContext } from 'react';
import FormContext from '../Contexts/FormContext';


const Login = () => {

  const { loginForm, handleLoginFormChange } = useContext(FormContext);

  return (
    <Form>
      <Heading>login</Heading>
      <Field
        type="email"
        autoFocus
        value={loginForm.email}
        onChange={handleLoginFormChange}
      />
      <Field
        type="current-pass"
        value={loginForm.password}
        onChange={handleLoginFormChange}
      />
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
