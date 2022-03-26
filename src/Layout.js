import Header from "./Components/Header";
import { FlexColumn } from "./Styles/Flex.styles";
import bg from "./Assets/Images/bg.jpg";

import styled, { createGlobalStyle } from "styled-components";
import { Outlet } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition-timing-function: cubic-bezier(.8,.36,.94,.49);;
  }
  body {
    font-family: 'Exo 2', sans-serif;
  }
`;

const Container = styled.main`
  ${FlexColumn}
  min-height: 100vh;
  background: url(${bg}) no-repeat fixed;
  background-size: cover;
`;

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <GlobalStyles />
    </Container>
  );
};

export default Layout;
