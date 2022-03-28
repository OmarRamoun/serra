import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element }) => {
  const user = useSelector(state => state.user.value);

  return (
    <>
      {user.isLoggedIn ? element : (<Navigate to="/login" replace />)};
    </>
  );
};

export default ProtectedRoute;
