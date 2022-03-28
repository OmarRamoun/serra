import home from '../Assets/Images/home-bg.jpg';
import styled from 'styled-components';
import { FlexColumn, FlexCenter } from '../Styles/Flex.styles';
import { Size, ThinBorder } from '../Styles/Layout.styles';

const StyledHome = styled.div`
  position: relative;
  ${FlexColumn}
  ${FlexCenter}
  gap: 0.6rem;
  height: 100vh;
  width: 100%;
  color: #fff;
  text-align: center;
  background: url(${home});
  background-size: 100% 100%;
  background-attachment: fixed;
  box-shadow: inset 0 0 40px 48px rgba(0, 0, 0, 0.8);
  clip-path: polygon(0px 0px, calc(17%) 0px, calc(20%) 3rem, calc(80%) 3rem, calc(83%) 0px, 100% 0px, 100% 100%, calc(83%) 100%, calc(80%) calc(100% - 3rem), calc(20%) calc(100% - 3rem), calc(17%) 100%, 0px 100%);
  opacity: 0.9;

  ${({ theme }) => theme.media.mobile} {
    flex: 1;
    background-size: cover;
    background-position: center;
    clip-path: polygon(0px 0px, calc(100%) 0px, calc(100%) 100%, 0px 100%);
    padding-left: 1rem;
    padding-right: 1rem;
    box-shadow: inset 0 0 30px 28px rgba(0, 0, 0, 0.5);
  }

  ::after {
    content: '';
    position: absolute;
    ${Size(100)};
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0.9) 90%);
  }
  h1 {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 5rem;
    font-weight: ${({ theme }) => theme.fontWeights.light};
    margin-bottom: 1rem;
    text-shadow: rgb(12 11 19) 2px 2px 4px;
    ${({ theme }) => theme.media.mobile} {
      font-size: 3rem;
      font-weight: ${({ theme }) => theme.fontWeights.regular};
    }
  }
  p {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.light};
    margin-bottom: 1rem;
  }
  .button-container {
    gap: 0.6rem;
    display: flex;
    z-index: 100;
    ${({ theme }) => theme.media.mobile} {
      flex-direction: column;
      gap: 0.3rem;
    }
  }
  a {
    position: relative;
    margin-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border: ${ThinBorder} rgba(255,255,255,0.1);
    border-radius: 15px;
    min-width: 180px;
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.light};
    transition-timing-function: ease;
    transition-duration: 0.4s;
    color: rgba(255,255,255,0.8);
    background-color: rgba(255,255,255,0.1);
    backdrop-filter: blur(30px);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);

    &::after {
      content: '';
      position: absolute;
      ${Size(55)};
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 30%,
        rgba(255, 255, 255, 0.1) 90%);
      box-shadow: 0 0 0 0 white;
      border-radius: 4em;
      opacity: 1;
      transition-duration: 0s;
    }
    :hover {
      transition-duration: 0.1s;
      background-color: rgba(255, 217, 0, 0.231);
      border: ${ThinBorder} rgba(255,215,0,0.1);
      color: #fff;
    }
    :active {
      top: 1px;
    }
  }
`;

export default StyledHome;
