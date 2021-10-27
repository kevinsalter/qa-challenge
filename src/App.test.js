import { render, screen } from '@testing-library/react';
import App from './App';

test('renders form title', () => {
  render(<App />);
  const title = screen.getByText(/sign me up!/i);
  expect(title).toBeInTheDocument();
});
