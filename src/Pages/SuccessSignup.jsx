import cards from '../Assets/Images/cards.png'
import HelpLink from '../Components/HelpLink';
import Container from "../Styles/CardContainer";


const SuccessSignup = () => {
  return (
    <Container>
      <img src={cards} alt='' style={{width: "22rem", opacity: "0.9"}}/>
      <h1>You have Successfully Signedup</h1>
      <br />
      <HelpLink link="/login" linkText="Login" text="You can" />
    </Container>
  )
}

export default SuccessSignup;
