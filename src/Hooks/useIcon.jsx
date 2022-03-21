import user from '../Assets/Icons/user.svg';
import pass from '../Assets/Icons/lock.svg';
import mail from '../Assets/Icons/mail.svg';
import show from '../Assets/Icons/eye.svg';


const useIcon = (type) => {
  switch (type) {
    case "password": return pass;
    case "email": return mail;
    case "show": return show;
    default: return user;
  };
}
export default useIcon;
