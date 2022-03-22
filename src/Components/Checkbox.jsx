import PropTypes from 'prop-types'
import HelpLink from './HelpLink'


const Checkbox = ({ id, text, linkText, link, ...props }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={id}
        {...props}
      />
      <label htmlFor={id}>
        <HelpLink
          text={text}
          linkText={linkText}
          link={link}
        />
      </label>
    </div>
  )
}

Checkbox.defaultProps = {
  linkText: '',
  link: '',
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  link: PropTypes.string
}

export default Checkbox;
