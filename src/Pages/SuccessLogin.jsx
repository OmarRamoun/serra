import HelpLink from "../Components/HelpLink";
import Button from "../Components/Button";
import ErrorBox from "../Components/Form/ErrorBox";
import { useLogin } from "../Contexts/LoginContext";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SuccessLogin = () => {

  const { handleLogout, errMsg, errRef } = useLogin();
  const { username } = useParams();
  const user = useSelector((state) => state.user.value);
  console.log("user: ", user);

  console.log(handleLogout);

  if (user.username === username) return (
    <section
      style={
        {
          background: "#fff",
          padding: "20px",
          maxWidth: "500px",
          margin: "220px auto",
          overflow: "auto"
        }
      }
    >
      <ErrorBox errMsg={errMsg} errRef={errRef} />
      <h1>You are logged in!</h1>
      <br />
      {
        Object.entries(user).map(([key, value]) => (
          <p key={key}>{key}: {value.toString()}</p>
        ))
      }

      <Button onClick={handleLogout}>Logout</Button>
      <HelpLink link="/signup" linkText="Back" text="Go" />
    </section>
  ); else return (
    <section
      style={
        {
          background: "#fff",
          padding: "20px"
        }
      }
    >
      <h1>You are not logged in!</h1>
      <br />
      <HelpLink link="/signup" linkText="Back" text="Go"/>
    </section>
  )
}

export default SuccessLogin;
