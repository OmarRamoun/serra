import Checkbox from "./Checkbox";

const CheckboxContainer = () => {
  return (
    <section>
      <Checkbox id="newsletter" text="I want to receive news about Synergy of Serra" />
      <Checkbox id="terms" text="I read and agree to the" linkText="Terms of Service" link="#" />
    </section>
  )
}
export default CheckboxContainer;
