import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calculator with initial value 0', () => {
  render(<App />);
  const inputElement = screen.getByDisplayValue('0');
  expect(inputElement).toBeInTheDocument();
});
