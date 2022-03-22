import SuccessSignup from './SuccessSignup';
import Form from '../Components/Form.styles';
import Heading from '../Components/Heading';
import Field from '../Components/Field';
import CheckboxContainer from '../Components/CheckboxContainer';
import Button from '../Components/Button';
import HelpLink from '../Components/HelpLink';
import ErrorBox from '../Components/ErrorBox';
import FormContext from '../Contexts/FormContext';
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
  } = useContext(FormContext);

  const { username, email, newPassword, confirmPassword } = signupForm;

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
  const emailFieldProps = getFieldProps(email, "email");
  const passwordFieldProps = getFieldProps(newPassword, "new-password");
  const confirmPasswordFieldProps = getFieldProps(confirmPassword, "confirm-password");

  return (
    <Container>
      {
        success ? (<SuccessSignup />)
          : (
            <Form onSubmit={handleSubmit}>
              {/* <ErrorBox errMsg={errMsg}/> */}
              <Heading>signup</Heading>

              <FormSection>
                <Field
                  ref={usernameRef}
                  autoFocus
                  {...usernameFieldProps}
                />
                <Field
                  fieldType="email"
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
                form={signupForm}
                aria-label="Sign Up"
              >
                Signup
              </Button>

              <HelpLink
                text="Already Have an Account?"
                linkText="Login"
                link="#"
              />
            </Form>
          )
      }
    </Container>
  );
};

export default Signup;
