import { useContext } from "react";
import FormContext from '../Contexts/FormContext';

const TextBox = (
  {
    id,
    type,
    title,
    valid,
    validate,
    ref,
    ...props
  }
) => {

  const {
    handleLoginFormChange,
    handleSignupFormChange,
    handleSignupFormFocusChange,
    handleLoginFormFocusChange
  } = useContext(FormContext);

  return (
    <div>
      <input
        autoComplete={id}
        id={id}
        name={id}
        type={type}
        placeholder={title}
        ref={ref}
        onchange={validate ? handleSignupFormChange : handleLoginFormChange}
        onfocus={e => validate ? handleSignupFormFocusChange(e, true) : handleLoginFormFocusChange(e, true)}
        onBlur={e => validate ? handleSignupFormFocusChange(e, false) : handleLoginFormFocusChange(e, false)}
        required
        {...props}
      />
    </div>
  )
}
export default TextBox;
