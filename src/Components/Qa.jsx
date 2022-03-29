import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FlexCenter } from '../Styles/Flex.styles';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledIcon = styled.div`
  ${FlexCenter};
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  margin-right: 1rem;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  color: #fff;
  background: #ffc107;
  box-shadow: 0 0.5rem 2rem rgba(0,0,0,0.4);
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #d8a202;
  }
  &:active {
    transform: scale(0.86);
  }
`;

const Qa = () => {
  return (
    <Link to="/">
      <StyledIcon>
        <AiOutlineQuestionCircle />
      </StyledIcon>
    </Link>
  )
}

export default Qa;
