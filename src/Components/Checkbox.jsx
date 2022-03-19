import PropTypes from 'prop-types'

const Checkbox = ({ id, text, linkText, link, ...props }) => {
  return (
    <div>
      <div>
        <input type="checkbox" id={id} name={id} {...props} />
        <label htmlFor={id}>
          {text}
          {linkText && <a href={link}>{linkText}</a>}
          .
        </label>
      </div>
    </div>
  )
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  link: PropTypes.string
}

export default Checkbox;
