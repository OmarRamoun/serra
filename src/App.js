import { lazy, Suspense } from "react";
import Layout from "./Layout";
import LoginWrapper from "./Pages/LoginContextWrapper";
import SignupWrapper from "./Pages/SignupContextWrapper";
import ProtectedRoute from "./Pages/ProtectedRoute";
import Loader from "./Components/Loader/Loader";
import Theme from "./Styles/Theme.styles";

import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./Pages/Home"));
const Signup = lazy(() => import("./Pages/Signup"));
const Login = lazy(() => import("./Pages/Login"));
const SuccessLogin = lazy(() => import("./Pages/SuccessLogin"));
const NotFoundPage = lazy(() => import("./Pages/404"));

function App() {
  return (
    <Theme>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<Loader />}>
                <LoginWrapper element={<Login />} />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense fallback={<Loader />}>
                <SignupWrapper element={<Signup />} />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<Loader />}>
                <ProtectedRoute
                  element={<LoginWrapper element={<SuccessLogin />} />}
                />
              </Suspense>
            }
          />
          <Route
            path="/loader"
            element={
              <Suspense fallback={<Loader />}>
                <Loader />
              </Suspense>
            }
          />
          <Route
            path="/*"
            element={
              <Suspense fallback={<Loader />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Theme>
  );
}

export default App;
