import styled from 'styled-components';
import { FlexColumn } from '../Styles/Flex.styles';


const Form = styled.form`
  ${FlexColumn}
  gap: 1.6rem;
  align-items: center;
  border-radius: 5px;
  padding: 3rem;
  max-width: 480px;
  color: #fff;
  background-color: rgb(12, 11, 14);
`;

export default Form;
