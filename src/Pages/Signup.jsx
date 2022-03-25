import SuccessSignup from './SuccessSignup';
import Form from '../Components/Form/Form.styles';
import Heading from '../Components/Heading.styles';
import Field from '../Components/Form/Field/Field';
import CheckboxContainer from '../Components/Form/Checkbox/CheckboxContainer';
import Button from '../Components/Button';
import HelpLink from '../Components/HelpLink';
import ErrorBox from '../Components/Form/ErrorBox';

import SignupContext from '../Contexts/SignupContext';
import { FlexCenter } from '../Styles/Flex.styles';
import { useContext, useEffect, createRef } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
// import useField from '../Hooks/useField';
import styled from 'styled-components';


const Container = styled.article`
  ${FlexCenter}
  flex: 1;
`;

const FormSection = styled.section`
  min-width: 80%;
`;

const Signup = () => {

  const {
    success,
    errMsg,
    signupForm,
    handleSubmit
  } = useContext(SignupContext);

  const { username, newEmail, newPassword, confirmPassword } = signupForm;

  const usernameRef = createRef();
  const emailRef = createRef();
  const newPasswordRef = createRef();
  const confirmPasswordRef = createRef();
  const errorMsgRef = createRef();

  const getFieldProps = (field, fieldAriaText) => ({
    validate: true,
    value: field.fieldValue,
    valid: field.valid,
    focus: field.focus,
    "aria-invalid": !field.valid,
    "aria-describedby": fieldAriaText + "-error-msg",
    ariaId: fieldAriaText + "-error-msg"
  });

  const usernameFieldProps = getFieldProps(username, "username");
  const emailFieldProps = getFieldProps(newEmail, "new-email");
  const passwordFieldProps = getFieldProps(newPassword, "new-password");
  const confirmPasswordFieldProps = getFieldProps(confirmPassword, "confirm-password");

  return (
    <Container>
      {
        success ? (<SuccessSignup />)
          : (
            <Form onSubmit={handleSubmit}>
              <ErrorBox errMsg={errMsg} />
              <Heading>signup</Heading>

              <FormSection>
                <Field
                  autoFocus
                  ref={usernameRef}
                  {...usernameFieldProps}
                />
                <Field
                  fieldType="new-email"
                  ref={emailRef}
                  {...emailFieldProps}
                />
                <Field
                  fieldType="new-pass"
                  ref={newPasswordRef}
                  {...passwordFieldProps}
                />
                <Field
                  fieldType="confirm-pass"
                  ref={confirmPasswordRef}
                  {...confirmPasswordFieldProps}
                />
              </FormSection>

              <CheckboxContainer />

              <Button
                aria-label="Sign Up"
                type="submit"
                disabled={
                  !(
                    username.valid &&
                    newEmail.valid &&
                    newPassword.valid.result &&
                    confirmPassword.valid
                  )
                }
              >
                Signup
              </Button>

              <HelpLink
                text="Already Have an Account?"
                linkText="Login"
                link="#"
              />

              <button onClick={
                () => { if (!!usernameRef.current) usernameRef.current.select(); }
              }>click 1</button>
              <button onClick={
                () => { if (!!newPasswordRef.current) newPasswordRef.current.select(); }
              }>click 2</button>
              <button onClick={
                () => { if (!!confirmPasswordRef.current) confirmPasswordRef.current.select(); }
              }>click 3</button>
              <button onClick={
                () => { if (!!emailRef.current) emailRef.current.select(); }
              }>click 4</button>

            </Form>
          )
      }
    </Container>
  );
};

export default Signup;
