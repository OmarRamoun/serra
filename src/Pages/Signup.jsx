import Form from '../Components/Form';
import Heading from '../Components/Heading';
import Field from '../Components/Field';
import CheckboxContainer from '../Components/CheckboxContainer';
import HelpLink from '../Components/HelpLink';
import { useContext, useEffect, createRef } from 'react';
import FormContext from '../Contexts/FormContext';
import { FaInfoCircle } from 'react-icons/fa';
// import ErrorBox from '../Components/ErrorBox';
// import useField from '../Hooks/useField';
import { FlexCenter } from '../Styles/Flex.styles';
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
  } = useContext(FormContext);

  const { username, email, newPassword, confirmPassword } = signupForm;

  const usernameRef = createRef();
  const emailRef = createRef();
  const newPasswordRef = createRef();
  const confirmPasswordRef = createRef();
  const errorMsgRef = createRef();

  const fieldProps = (fieldType, fieldKey) => ({
    value: fieldType.fieldValue,
    "aria-invalid": !fieldType.valid,
    "aria-describedby": fieldKey + "-error-msg",
    valid: fieldType.valid,
    validate: true
  });

  const usernameFieldProps = fieldProps(username, "username");
  const emailFieldProps = fieldProps(email, "email");
  const passwordFieldProps = fieldProps(newPassword, "new-password");
  const confirmPasswordFieldProps = fieldProps(confirmPassword, "confirm-password");

  return (
    <Container>
      {
        success ? (<h1>Success</h1>)
          : (
            <Form onSubmit={handleSubmit}>
              {/* <ErrorBox /> */}
              <Heading>signup</Heading>
              <FormSection>
                <Field
                  ref={usernameRef}
                  autoFocus
                  {...usernameFieldProps}
                />
                <Field
                  type="email"
                  ref={emailRef}
                  {...emailFieldProps}
                />
                <Field
                  type="new-pass"
                  ref={newPasswordRef}
                  {...passwordFieldProps}
                />
                <Field
                  type="confirm-pass"
                  ref={confirmPasswordRef}
                  {...confirmPasswordFieldProps}
                />
              </FormSection>

              <CheckboxContainer />

              <button
                aria-label="Sign Up"
                disabled={!signupForm.username.valid || !signupForm.email.valid || !signupForm.newPassword.valid || !signupForm.confirmPassword.valid}
              >
                SIGNUP
              </button>
              <HelpLink text="Already Have an Account?" linkText="Login" link="#" />
            </Form>
          )
      }
    </Container>
  );
};

export default Signup;
