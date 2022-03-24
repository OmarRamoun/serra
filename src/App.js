import Header from "./Components/Header";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { LoginContextProvider } from "./Contexts/LoginContext";
import { SignupContextProvider } from "./Contexts/SignupContext";
import bg from "./Assets/Images/bg.jpg";
import { FlexColumn } from "./Styles/Flex.styles";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.3s cubic-bezier(.8,.36,.94,.49);
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

function App() {
  return (
    <Container>
      <Header />
      <LoginContextProvider>
        <Login />
      </LoginContextProvider>
      <SignupContextProvider>{/* <Signup /> */}</SignupContextProvider>
      <GlobalStyles />
    </Container>
  );
}

export default App;
