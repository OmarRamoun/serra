import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitForElement } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ComponentsArrangement from './ComponentsArrangement';


test('on render the login button will be disabled. if all fields are filled, the login button becomes enabled and then click on it', async () => {
  render(ComponentsArrangement);

  // click on the login button
  userEvent.click(await screen.findByRole('link', { name: /Log In/i }));

  // check if the login button is disabled
  expect(await screen.findByRole('button', { name: /Log In/i })).toBeDisabled();

  // fill the E-Mail Address field with dummy text
  userEvent.type(await screen.findByPlaceholderText('E-Mail Address'), 'user@test.com');
  expect(await screen.findByPlaceholderText('E-Mail Address')).toHaveValue('user@test.com');

  // fill the Password field with dummy text
  userEvent.type(await screen.findByPlaceholderText(/Password/i), "Chisaku");
  expect(await screen.findByPlaceholderText(/Password/i)).toHaveValue('Chisaku');

  // check if the login button is enabled
  expect(await screen.findByRole('button', { name: /Log In/i })).toBeEnabled();

  // press Enter key (submit)
  userEvent.keyboard('{Enter}');

  // click on the signup link to go to signup page
  userEvent.click(await screen.findByRole('link', { name: /Sign up/i }));
  // check if there is a heading on the page with the name 'signup'
  const lazyElement = await (await screen.findAllByRole('heading', { name: /signup/i })).slice(0)[0];

  expect(lazyElement).toBeInTheDocument();
});

test('on filling correct data and clicking the login button, should be moved to t profile page', async () => {
  render(ComponentsArrangement);

  // click on the login button
  userEvent.click(await screen.findByRole('link', { name: /LOGIN/i }));

  // fill the E-Mail Address field with real email
  userEvent.type(await screen.findByPlaceholderText('E-Mail Address'), 'omartarekramoun@gmail.com');

  // fill the Password field with correct pass
  userEvent.type(await screen.findByPlaceholderText(/Password/i), "Mynameisr@moun16");

  // click on the login button
  userEvent.click(await screen.findByRole('button', { name: /Log In/i }));
});

