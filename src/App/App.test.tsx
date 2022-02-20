import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { App } from '.';

test('renders an input element', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  const inputElement = screen.getByPlaceholderText(
    /Search a GitHub Repository/i,
  );

  expect(inputElement).toBeInTheDocument();
});
