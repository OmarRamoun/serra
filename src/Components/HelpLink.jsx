const HelpLink = ({ text, linkText, link }) => {
  return (
    <p>
      {text}
      <a href={link}>
        {linkText}
      </a>
    </p>
  )
}
export default HelpLink;
