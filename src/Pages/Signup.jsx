import SuccessSignup from './SuccessSignup';
import Heading from '../Components/Heading.styles';
import Field from '../Components/Form/Field/Field';
import CheckboxContainer from '../Components/Form/Checkbox/CheckboxContainer';
import Button from '../Components/Button';
import HelpLink from '../Components/HelpLink';
import ErrorBox from '../Components/Form/ErrorBox';
import Qa from '../Components/Qa';
import { useSignup } from '../Hooks/contextHooks';
import { getFieldProps } from '../Hooks/formHooks';
import { Container, FormSection, Form } from '../Components/Form/Form.styles';


const Signup = () => {

  const {
    signupSuccess,
    errMsg,
    errMsgRef,
    usernameRef,
    signupForm,
    handleSubmit
  } = useSignup();

  const { username, newEmail, newPassword, confirmPassword, terms } = signupForm;

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
            <Form data-testid="signup-form" onSubmit={handleSubmit}>
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
                    confirmPassword.valid &&
                    terms
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
      <Qa />
    </Container>
  );
};

export default Signup;
