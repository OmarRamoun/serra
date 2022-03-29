import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ComponentsArrangement from "../../__TESTS__/ComponentsArrangement";

describe('testing components', () => {

  test('testing Header.jsx', () => {
    const view = render(ComponentsArrangement);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
    expect(view).toMatchSnapshot();
  });

  test('testing login.jsx', () => {
    const view = render(ComponentsArrangement);
    const loginBtn = screen.getByRole("link", { name: /log in/i });
    userEvent.click(loginBtn);
    const loginForm = screen.getByTestId('login-form');
    expect(loginForm).toBeInTheDocument();
    expect(view).toMatchSnapshot();
  });

  test('testing signup.jsx', () => {
    const view = render(ComponentsArrangement);
    const signupBtn = screen.getByRole("link", { name: /sign up/i });
    userEvent.click(signupBtn);
    const signupForm = screen.getByTestId('signup-form');
    expect(signupForm).toBeInTheDocument();
    expect(view).toMatchSnapshot();
  });
});
