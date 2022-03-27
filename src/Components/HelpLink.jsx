import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const HelpLink = ({ text, linkText, link }) => {
  return (
    <p style={{display: "flex", alignItems: "center", gap: "0.4rem"}}>
      {text}
      {linkText &&
        <Link
          to={link}
          style={{
            textDecoration: "none",
            color: "#FFD026"
          }}>
          {linkText}
        </Link>
      }
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
