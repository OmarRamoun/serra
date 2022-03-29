import Heading from '../Components/Heading.styles';
import Field from '../Components/Form/Field/Field';
import Button from '../Components/Button';
import HelpLink from '../Components/HelpLink';
import { useLogin } from '../Hooks/contextHooks';
import ErrorBox from '../Components/Form/ErrorBox';
import { Container, FormSection, Form } from '../Components/Form/Form.styles';


const Login = () => {

  const {
    email,
    password,
    handleSubmit,
    errMsg,
    errMsgRef
  } = useLogin();


  return (
    <Container>
      <Form data-testid="login-form" onSubmit={handleSubmit}>
        <ErrorBox ref={errMsgRef} errMsg={errMsg} />

        <Heading>login</Heading>

        <FormSection>
          <Field
            autoFocus
            fieldType="current-email"
            value={email}
          />
          <Field
            fieldType="current-pass"
            value={password}
          />
        </FormSection>

        <Button
          aria-label="Log In"
          type="submit"
          disabled={
            !(password && email)
          }
          style={{marginBlock: "1rem"}}
        >
          LOGIN
        </Button>

        <HelpLink
          text="Don't have an account yet?"
          linkText="Sign up"
          link="/signup"
        />
        <HelpLink
          text="Don't Remember Your Password?"
          linkText="Recover My Password"
          link="#"
        />
      </Form>
    </Container>
  )
};

export default Login;
