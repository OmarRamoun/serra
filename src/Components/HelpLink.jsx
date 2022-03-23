import PropTypes from 'prop-types'

const HelpLink = ({ text, linkText, link }) => {
  return (
    <p>
      {text}
      {linkText &&
        <a href={link}>
          {linkText}
        </a>
      }
      .
    </p>
  )
}

HelpLink.defaultProps = {
  linkText: '',
  link: '',
}

HelpLink.propTypes = {
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  link: PropTypes.string
}

export default HelpLink;
