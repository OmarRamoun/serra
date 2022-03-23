import Heading from '../Components/Form/Heading.styles';
import Form from '../Components/Form/Form.styles';
import Field from '../Components/Form/Field/Field';
import HelpLink from '../Components/Form/HelpLink';

import { useContext, useEffect, createRef } from 'react';
import FormContext from '../Contexts/FormContext';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/user';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../Validations/regex';
import styled from 'styled-components';
import { FlexCenter } from '../Styles/Flex.styles';


const Container = styled.article`
  ${FlexCenter}
  flex: 1;
`;

const FormSection = styled.section`
  min-width: 80%;
`;


const Login = () => {

  const { loginSuccess, loginForm, handleLoginFormChange } = useContext(FormContext);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const emailRef = createRef();
  const passwordRef = createRef();

  // useEffect(() => {
  //   // we can also useRef to set focus on email
  //   console.log('Login.jsx rendered');
  //   // emailRef.current.focus();
  // }, []);

  // useEffect(() => {
  //   const result = EMAIL_REGEX.test(loginForm.email.fieldValue);
  //   if (result) console.log("VAlid");
  // }, [loginForm.email.fieldValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    dispatch(login({
      email: loginForm.email.fieldValue,
      password: loginForm.currentPassword.fieldValue
    }));
  }

  return (
    <Container>
      {loginSuccess ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          {
            Object.entries(user).map(([key, value]) => (
              <p key={key}>{key}: {value}</p>
            ))
          }
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Heading>login</Heading>
          <FormSection>
            <Field
              type="email"
              autoFocus
              value={loginForm.email.fieldValue}
              onChange={handleLoginFormChange}
              ref={emailRef}
              valid={loginForm.email.valid}
              validate
            />
            <Field
              type="current-pass"
              value={loginForm.password}
              onChange={handleLoginFormChange}
              ref={passwordRef}
            />
          </FormSection>
          <button
            type="submit"
            aria-label="Log in"
          >
            LOGIN
          </button>
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
