import { FlexColumn, FlexCenter } from '../../Styles/Flex.styles';
import { ThinBorder } from '../../Styles/Layout.styles';

import styled from 'styled-components';


const Container = styled.article`
  ${FlexCenter};
  flex: 1;
  ${({ theme }) => theme.media.mobile} {
    align-items: stretch;
  }
`;

const FormSection = styled.section`
  min-width: 100%;
`;

const Form = styled.form`
  ${FlexColumn};
  align-items: center;
  gap: 1.6rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
  padding: 3rem;
  border: ${ThinBorder} rgba(199, 199, 199, 0.1);
  border-bottom: ${ThinBorder} rgba(199, 199, 199, 0.1);
  border-top: ${ThinBorder} rgba(199, 199, 199, 0.1);
  border-radius: 5px;
  max-width: 480px;
  color: #fff;
  background-color: rgb(12, 11, 19, 0.8);
  backdrop-filter: blur(20px);
  box-shadow: 0 0rem 0.8rem rgba(9, 11, 9, 0.7);

  ${({ theme }) => theme.media.mobile} {
    flex: 1;
    border-top: 0;
    border-radius: 0;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export {Container, FormSection, Form};
