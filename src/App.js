import Layout from "./Layout";
import Home from "./Pages/Home";
import LoginWrapper from "./Pages/LoginContextWrapper";
import SignupWrapper from "./Pages/SignupContextWrapper";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ProtectedRoute from "./Pages/ProtectedRoute";
import SuccessLogin from "./Pages/SuccessLogin";
import NotFoundPage from "./Pages/404";
import Theme from "./Styles/Theme.styles";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Theme>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginWrapper element={<Login />} />} />
          <Route
            path="/signup"
            element={<SignupWrapper element={<Signup />} />}
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={<LoginWrapper element={<SuccessLogin />} />}
              />
            }
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Theme>
  );
}

export default App;
