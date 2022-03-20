import Form from '../Components/Form';
import Heading from '../Components/Heading';
import Field from '../Components/Field';
import CheckboxContainer from '../Components/CheckboxContainer';
import HelpLink from '../Components/HelpLink';
import { useContext, useEffect, createRef } from 'react';
import FormContext from '../Contexts/FormContext';
import { FaInfoCircle } from 'react-icons/fa';

const Signup = () => {

  const { success, errMsg, signupForm, handleSignupFormChange, handleSignupFormFocusChange, handleSubmit } = useContext(FormContext);

  const usernameRef = createRef();
  const emailRef = createRef();
  const newPasswordRef = createRef();
  const confirmPasswordRef = createRef();
  const errorMsgRef = createRef();


  return (
    <>
      {
        success ? ( <h1>Success</h1> )
          : (
            <Form onSubmit={handleSubmit}>
              <p
                ref={errorMsgRef}
                className={errMsg ? "err" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <Heading>signup</Heading>
              <Field
                autoFocus
                value={signupForm.username.fieldValue}
                onChange={handleSignupFormChange}
                aria-invalid={!signupForm.username.valid}
                aria-describedby="username-error-msg"
                onFocus={(e) => handleSignupFormFocusChange(e, true)}
                onBlur={(e) => handleSignupFormFocusChange(e, false)}
                valid={signupForm.username.valid}
              />
              <p
                id="username-error-msg"
                className={!signupForm.username.fieldValue && !signupForm.username.valid && signupForm.username.focus ? "offscreen" : "err"}
                aria-live="assertive"
              >
                {<FaInfoCircle />}
                Username is required and must be between 3 and 20 characters.
              </p>
              <Field
                type="email"
                value={signupForm.email.fieldValue}
                onChange={handleSignupFormChange}
                aria-invalid={!signupForm.email.valid}
                aria-describedby="email-error-msg"
                onFocus={(e) => handleSignupFormFocusChange(e, true)}
                onBlur={(e) => handleSignupFormFocusChange(e, false)}
                valid={signupForm.email.valid}
              />
              <Field
                type="new-pass"
                value={signupForm.newPassword.fieldValue}
                onChange={handleSignupFormChange}
                aria-invalid={!signupForm.newPassword.valid}
                aria-describedby="new-password-error-msg"
                onFocus={(e) => handleSignupFormFocusChange(e, true)}
                onBlur={(e) => handleSignupFormFocusChange(e, false)}
                valid={signupForm.newPassword.valid}
              />
              <Field
                type="confirm-pass"
                value={signupForm.confirmPassword.fieldValue}
                onChange={handleSignupFormChange}
                aria-invalid={!signupForm.confirmPassword.valid}
                aria-describedby="confirm-password-error-msg"
                onFocus={(e) => handleSignupFormFocusChange(e, true)}
                onBlur={(e) => handleSignupFormFocusChange(e, false)}
                valid={signupForm.confirmPassword.valid}
              />

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
    </>
  );
};

export default Signup;
