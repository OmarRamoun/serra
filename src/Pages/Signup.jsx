import SuccessSignup from './SuccessSignup';
import Form from '../Components/Form/Form.styles';
import Heading from '../Components/Heading.styles';
import Field from '../Components/Form/Field/Field';
import CheckboxContainer from '../Components/Form/Checkbox/CheckboxContainer';
import Button from '../Components/Button';
import HelpLink from '../Components/HelpLink';
import ErrorBox from '../Components/Form/ErrorBox';
import { useSignup } from '../Hooks/contextHooks';
import { FlexCenter } from '../Styles/Flex.styles';

// import useField from '../Hooks/useField';
import styled from 'styled-components';


const Container = styled.article`
  ${FlexCenter}
  flex: 1;
`;

const FormSection = styled.section`
  min-width: 100%;
`;

const Signup = () => {

  const {
    signupSuccess,
    errMsg,
    errMsgRef,
    usernameRef,
    signupForm,
    handleSubmit
  } = useSignup();

  const { username, newEmail, newPassword, confirmPassword } = signupForm;

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

  // {/* validate prop determins to validate (in case of signup) or not to validate (in case of login) */}
  return (
    <Container>
      {
        signupSuccess ? (<SuccessSignup />)
          : (
            <Form onSubmit={handleSubmit}>
              <ErrorBox ref={errMsgRef} errMsg={errMsg} />

              <Heading>signup</Heading>

              <FormSection>
                <Field
                  ref={usernameRef}
                  {...usernameFieldProps}
                />
                <Field
                  fieldType="new-email"
                  {...emailFieldProps}
                />
                <Field
                  fieldType="new-pass"
                  {...passwordFieldProps}
                />
                <Field
                  fieldType="confirm-pass"
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
                link="/login"
              />
            </Form>
          )
      }
    </Container>
  );
};

export default Signup;
