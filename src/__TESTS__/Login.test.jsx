import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ComponentsArrangement from './ComponentsArrangement';


test('on render the login button will be disabled. if all fields are filled, the login button becomes enabled and then click on it', () => {
  render (ComponentsArrangement);

  // click on the login button
  userEvent.click(screen.getByRole('link', { name: /Log In/i }));

  // check if the login button is disabled
  expect(screen.getByRole('button', { name: /Log In/i }).disabled).toBe(true);

  // fill the E-Mail Address field with dummy text
  userEvent.type(screen.getByPlaceholderText('E-Mail Address'), 'user@test.com');
  expect(screen.getByPlaceholderText('E-Mail Address')).toHaveValue('user@test.com');

  // fill the Password field with dummy text
  userEvent.type(screen.getByPlaceholderText(/Password/i), "Chisaku");
  expect(screen.getByPlaceholderText(/Password/i)).toHaveValue('Chisaku');

  // check if the login button is enabled
  expect(screen.getByRole('button', { name: /Log In/i })).toBeEnabled();

  // press Enter key (submit)
  userEvent.keyboard('{Enter}');

  // click on the signup link to go to signup page
  userEvent.click(screen.getByRole('link', { name: /Sign up/i }));

  // check if there is a heading on the page with the name 'signup'
  expect(screen.getAllByRole('heading', { name: /signup/i })[0]).toBeInTheDocument();
});

test('on filling correct data and clicking the login button, should be moved to t profile page', async () => {
  render (ComponentsArrangement);

  // click on the login button
  userEvent.click(screen.getByRole('link', { name: /LOGIN/i }));


  // fill the E-Mail Address field with real email
  userEvent.type(screen.getByPlaceholderText('E-Mail Address'), 'omartarekramoun@gmail.com');

  // fill the Password field with correct pass
  userEvent.type(screen.getByPlaceholderText(/Password/i), "Mynameisr@moun16");

  // click on the login button
  userEvent.click(screen.getByRole('button', { name: /Log In/i }));

  // const linkElement = screen.getByText(/logged In/i);
  // expect(linkElement).toBeInTheDocument();
});

