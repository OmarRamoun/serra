import HelpLink from "../Components/HelpLink";
import Button from "../Components/Button";
import ErrorBox from "../Components/Form/ErrorBox";
import { useLogin } from "../Hooks/contextHooks";
import Container from "../Styles/CardContainer";

import { useSelector } from "react-redux";


const SuccessLogin = () => {

  const { handleLogout, errMsg, errRef } = useLogin();
  const user = useSelector(state => state.user.value);

  return (
    <Container>
      <ErrorBox errMsg={errMsg} errRef={errRef} />
      <h1>You are logged in!</h1>
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
        Logout
      </Button>
      <HelpLink link="/" linkText="Home Page" text="Visit" />
    </Container>
  );
}

export default SuccessLogin;
