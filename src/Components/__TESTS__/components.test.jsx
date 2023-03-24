import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ComponentsArrangement from "../../__TESTS__/ComponentsArrangement";

describe('testing components', () => {

  test('testing Header.jsx', async () => {
    const view = render(ComponentsArrangement);
    const header = await screen.findByTestId('header');
    expect(header).toBeInTheDocument();
    expect(view).toMatchSnapshot();
  });

  test('testing login.jsx', async () => {
    const view = render(ComponentsArrangement);
    const loginBtn = await screen.findByRole("link", { name: /log in/i });
    userEvent.click(loginBtn);
    const loginForm = await screen.findByTestId('login-form');
    expect(loginForm).toBeInTheDocument();
    expect(view).toMatchSnapshot();
  });

  test('testing signup.jsx', async () => {
    const view = render(ComponentsArrangement);
    const signupBtn = await screen.findByRole("link", { name: /sign up/i });
    userEvent.click(signupBtn);
    const signupForm = await screen.findByTestId('signup-form');
    expect(signupForm).toBeInTheDocument();
    expect(view).toMatchSnapshot();
  });
});
