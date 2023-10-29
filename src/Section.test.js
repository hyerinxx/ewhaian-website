import { render, screen } from '@testing-library/react';
import Section from './Section';

test('renders learn react link', () => {
  render(<Section />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
