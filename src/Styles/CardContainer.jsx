import { FlexColumn } from './Flex.styles';
import styled from 'styled-components';

const bgOpacity = "0.2";
export default styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 5px;
  margin-top: 2rem;
  padding: 5rem;
  ${FlexColumn};
  max-width: 70%;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 0 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  transform: translate(-50%, -50%);
  color: white;
  background:
    linear-gradient(
      to left bottom,
      rgba(248, 17, 119, ${bgOpacity}) 0%,
      rgba(255, 60, 130, ${bgOpacity}) 10%,
      rgba(255, 165, 87, ${bgOpacity}) 15%,
      rgba(254, 197, 92, ${bgOpacity}) 20%,
      rgba(206, 218, 120, ${bgOpacity}) 30%,
      rgba(44, 232, 174, ${bgOpacity}) 40%,
      rgba(0, 228, 227, ${bgOpacity}) 50%,
      rgba(4, 235, 225, ${bgOpacity}) 60%,
      rgba(3, 196, 239, ${bgOpacity}) 70%,
      rgba(50, 92, 238, ${bgOpacity}) 80%,
      rgba(28, 72, 221, ${bgOpacity}) 90%,
      rgba(236, 63, 231, ${bgOpacity}) 100%);
  background-size: 100% 100%;
  backdrop-filter: blur(40px);

  ${({ theme }) => theme.media.mobile} {
    max-width: 90%;
    min-height: 80vh;
    margin: 0;
  }
`;
