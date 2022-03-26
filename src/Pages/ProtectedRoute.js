import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) => {
        isLoggedIn ? <Component {...props} /> : <Navigate to="/login" />;
      }}
    />
  );
};

export default ProtectedRoute;
