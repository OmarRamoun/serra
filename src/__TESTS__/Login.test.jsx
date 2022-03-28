import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginWrapper from "../Pages/LoginContextWrapper";
import Layout from '../Layout';
import Login from '../Pages/Login';
import Theme from "../Styles/Theme.styles";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "../features/user";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

test('on page render, the login button must be disabled', () => {

  render(
    <Router>
      <Theme>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <Provider store={store}>
                <LoginWrapper element={<Login />} />
              </Provider>
            } />
          </Route>
        </Routes>
      </Theme>
    </Router>
  );
  expect(screen.getByRole('button', { name: /Log In/i }).disabled).toBe(true);
});

test('if all fields are filled, the login button becomes enabled', () => {
  render(
    <Router>
      <Theme>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <Provider store={store}>
                <LoginWrapper element={<Login />} />
              </Provider>
            } />
          </Route>
        </Routes>
      </Theme>
    </Router>
  );
  // fill the E-Mail Address field with dummy text
  userEvent.type(screen.getByPlaceholderText('E-Mail Address'), 'Hello,World!');
  expect(screen.getByPlaceholderText('E-Mail Address')).toHaveValue('Hello,World!');
  // fill the Password field with dummy text
  userEvent.type(screen.getByPlaceholderText(/Password/i), "hi");
  // check if the login button is enabled
  expect(screen.getByRole('button', { name: /Log In/i })).toBeEnabled();
  // screen.debug()
});
