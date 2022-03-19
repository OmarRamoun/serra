import PropTypes from 'prop-types'

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

HelpLink.propTypes = {
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default HelpLink;
