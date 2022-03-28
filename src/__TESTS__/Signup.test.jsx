import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ComponentsArrangement from './ComponentsArrangement';

test('on render the signup button will be disabled. if all fields are filled correctly, the signup button becomes enabled and then click on it', () => {
  render (ComponentsArrangement);

  // click on the signup button
  userEvent.click(screen.getByRole('link', { name: /Sign Up/i }));

  expect(screen.getByRole('button', { name: /Sign Up/i })).toBeDisabled();

  // fill the username field with correct data
  userEvent.type(screen.getByPlaceholderText('Username'), 'PromoA');

  // fill the E-Mail Address field with correct data
  userEvent.type(screen.getByPlaceholderText('E-Mail Address'), 'promoA@synergy.com');

  // fill the Password field with correct data
  userEvent.type(screen.getAllByPlaceholderText(/Password/i)[0], "promoA@synergy22");

  // fill the Password Confirmation field with correct data
  // screen.getByLabelText(/Confirm Password/i).value = "promoA@synergy22";
  userEvent.type(screen.getByLabelText(/Confirm Password/i), "promoA@synergy22");

  // check if the signup button is enabled
  expect(screen.getByRole('button', { name: /Sign Up/i })).toBeEnabled();

  // press Enter key (submit)
  userEvent.keyboard('{Enter}');


  // check if there is a heading on the page with the name 'signup'
  expect(screen.getAllByRole('heading', { name: /signup/i })[0]).toBeInTheDocument();

});
