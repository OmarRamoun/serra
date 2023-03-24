
import "../index.css";
import App from "../App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "../features/user";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </Provider>
)
