import Input from './Input';


const Field = ({ type, ...props }) => {
  return (
    <>
      {
        type === 'email' ?
          <Input id="email" type="email" title="E-Mail Adddress" {...props} /> :

        type === 'new-pass' ?
          <Input id="new-password" type="password" title="Password" /> :

        type === 'current-pass' ?
          <Input id="current-password" type="password" title="Password" /> :

        type === 'confirm-pass' ?
          <Input id="confirm-password" type="password" title="Confirm Password" /> :

          <Input id="username" type="text" title="Username" {...props} />
      }
    </>
  )
}
export default Field;
