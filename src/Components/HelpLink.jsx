import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const HelpLink = ({ text, linkText, link }) => {
  return (
    <p>
      {text}
      {linkText &&
        <Link to={link}>
          {linkText}
        </Link>
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
