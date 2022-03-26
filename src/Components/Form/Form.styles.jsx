import { FlexColumn } from '../../Styles/Flex.styles';
import styled from 'styled-components';


const Form = styled.form`
  ${FlexColumn};
  gap: 1.6rem;
  align-items: center;
  border-radius: 5px;
  margin-top: 3rem;
  margin-bottom: 5rem;
  padding: 3rem;
  max-width: 480px;
  color: #fff;
  background-color: rgb(12, 11, 19, 0.8);
  border: 1px solid rgba(199, 199, 199, 0.1);
  border-bottom: 1px solid rgba(199, 199, 199, 0.1);
  border-top: 1px solid rgba(199, 199, 199, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 0rem 0.8rem rgba(9, 11, 9, 0.7);
`;

export default Form;
