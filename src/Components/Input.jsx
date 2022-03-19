const Input = ({ id, type, title, ...props }) => {
  return (
    <div>
      <label htmlfor={id}>{title}</label>
      <input
        autofocus={props.focus}
        autoComplete={id}
        id={id}
        name={id}
        type={type}
        placeholder={title}
        required
      />
    </div>
  )
}

Input.defaultProps = {
  focus: false,
  type: 'text',
}

export default Input;
