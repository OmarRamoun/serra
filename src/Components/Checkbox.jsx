const Checkbox = ({ id, text, linkText, link }) => {
  return (
    <div>
      <div>
        <input type="checkbox" id={id} />
        <label htmlfor={id}>
          {text}
          {linkText && <a href={link}>{linkText}</a>}
          .
        </label>
      </div>
    </div>
  )
}

export default Checkbox;
