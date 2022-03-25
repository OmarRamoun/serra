import Heading from '../Components/Heading.styles';
import Form from '../Components/Form/Form.styles';
import Field from '../Components/Form/Field/Field';
import Button from '../Components/Button';
import HelpLink from '../Components/HelpLink';
import SuccessLogin from './SuccessLogin';
import { useLogin } from '../Contexts/LoginContext';
import ErrorBox from '../Components/Form/ErrorBox';
import { FlexCenter } from '../Styles/Flex.styles';

import { useContext } from 'react';
import styled from 'styled-components';


const Container = styled.article`
  ${FlexCenter};
  flex: 1;
`;

const FormSection = styled.section`
  min-width: 80%;
`;


const Login = () => {

  const {
    loginSuccess,
    loginForm,
    handleSubmit,
    errMsg,
    errRef
  } = useLogin();
  const {
    currentEmail: { fieldValue: email },
    currentPassword: { fieldValue: password }
  } = loginForm;


  return (
    <Container>
      {loginSuccess ? (
        <SuccessLogin />
      ) : (
        <Form onSubmit={handleSubmit}>
          <ErrorBox ref={errRef} errMsg={errMsg} />

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
          >
            LOGIN
          </Button>

          <HelpLink
            text="Don't have an account yet?"
            linkText="Sign up"
            link="#"
          />
          <HelpLink
            text="Don't Remember Your Password?"
            linkText="Recover My Password"
            link="#"
          />
        </Form>
      )}
    </Container>
  )
}

export default Login;
