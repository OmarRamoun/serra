import Layout from "./Layout";
import Home from "./Pages/Home";
import NotFoundPage from "./Pages/404";
import SignupWrapper from "./Pages/SignupContextWrapper";
import LoginWrapper from "./Pages/LoginContextWrapper";
import SuccessLogin from "./Pages/SuccessLogin";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";


import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginWrapper component={Login} />} />
        <Route path="/signup" element={<SignupWrapper component={Signup} />} />
        <Route path="/profile" element={<LoginWrapper component={SuccessLogin} />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
