import Layout from "./Layout";
import Home from "./Pages/Home";
import NotFoundPage from "./Pages/404";
import SignupWrapper from "./Pages/SignupWrapper";
import LoginWrapper from "./Pages/LoginWrapper";
import SuccessLogin from "./Pages/SuccessLogin";

import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginWrapper />} />
        <Route path="/signup" element={<SignupWrapper />} />
        <Route path="/:username" element={<SuccessLogin />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
