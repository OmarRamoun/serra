import { useSelector } from "react-redux";

const SuccessLogin = () => {

  const user = useSelector((state) => state.user.value);

  return (
    <section
      style={
        {
          background: "#fff",
          padding: "20px"
        }
      }
    >
      <h1>You are logged in!</h1>
      <br />
      {
        Object.entries(user).map(([key, value]) => (
          <p key={key}>{key}: {value}</p>
        ))
      }
      <p>
        <a href="#">Go to Home</a>
      </p>
    </section>
  )
}

export default SuccessLogin;
