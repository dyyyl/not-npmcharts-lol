import { render, screen } from '@testing-library/react';

import { App } from '.';

test('renders an input element', () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText(
    /Search a GitHub Repository/i,
  );

  expect(inputElement).toBeInTheDocument();
});
