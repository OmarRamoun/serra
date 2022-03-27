import HelpLink from "../Components/HelpLink";
import Button from "../Components/Button";
import ErrorBox from "../Components/Form/ErrorBox";
import { useLogin } from "../Contexts/LoginContext";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from 'styled-components';


const Container = styled.section`
  box-shadow: 0 0 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding: 5rem;
  max-width: 70%;
  background:
    linear-gradient(
      to left bottom,
      rgba(248, 17, 119, 0.2) 0%,
      rgba(255, 60, 130, 0.2) 10%,
      rgba(255, 165, 87, 0.2) 15%,
      rgba(254, 197, 92, 0.2) 20%,
      rgba(206, 218, 120, 0.2) 30%,
      rgba(44, 232, 174, 0.2) 40%,
      rgba(0, 228, 227, 0.2) 50%,
      rgba(4, 235, 225, 0.2) 60%,
      rgba(3, 196, 239, 0.2) 70%,
      rgba(50, 92, 238, 0.2) 80%,
      rgba(28, 72, 221, 0.2) 90%,
      rgba(236, 63, 231, 0.2) 100%);
  background-size: 100% 100%;
  backdrop-filter: blur(40px);
  border-radius: 5px;
  margin-top: 2rem;
`;

const SuccessLogin = () => {

  const { handleLogout, errMsg, errRef } = useLogin();
  const { username } = useParams();
  const user = useSelector((state) => state.user.value);

  if (user.username === username) return (
    <Container>
      <ErrorBox errMsg={errMsg} errRef={errRef} />
      <h1>You are logged in!</h1>
      <br />
      {
        Object.entries(user).map(([key, value]) => {
          if (key === "sessionId") return null;
          return <p key={key}>
            <span style={{color: "#f0f03c", marginRight: "0.3rem"}}>{key} :</span>
            {value.toString()}
          </p>
        })
      }
      <Button
        style={{ marginBlock: "1rem", alignSelf: "center" }}
        onClick={handleLogout}
      >
        Logout</Button>
      <HelpLink link="/signup" linkText="Back" text="Go" />
    </Container>
  ); else return (
    <Container>
      <h1>You are not logged in!</h1>
      <br />
      <HelpLink link="/login" linkText="Login" text="You can" />
    </Container>
  )
}

export default SuccessLogin;
