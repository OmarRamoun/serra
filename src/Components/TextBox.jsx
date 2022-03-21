import { useContext } from "react";
import FormContext from '../Contexts/FormContext';
import Icon from './Icon';
import ShowPass from './ShowPass';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  height: 1.6rem;
  font-size: 1rem;
  border-bottom: 1px solid rgb(125, 125, 140);
`;

const StyledInput = styled.input`
  flex: 1;
  background: #000;
  border: none;
  color: #fff;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-family: 'Exo 2' , sans-serif;
  outline: none;
`;

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
    <Container>
      <Icon type={type} />
      <StyledInput
        autoComplete={id}
        id={id}
        name={id}
        type={type}
        placeholder={title}
        // ref={ref}
        onchange={validate ? handleSignupFormChange : handleLoginFormChange}
        onfocus={e => validate ? handleSignupFormFocusChange(e, true) : handleLoginFormFocusChange(e, true)}
        onBlur={e => validate ? handleSignupFormFocusChange(e, false) : handleLoginFormFocusChange(e, false)}
        required
        {...props}
      />
      {type === "password" && <Icon type="show" />}
    </Container>
  )
}
export default TextBox;
