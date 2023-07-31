import { render, screen } from '@testing-library/react';
import App from './App';

// Smoke test
test('renders without crashing', () => {
  render(<App />);
});

// Snapshot test
it("matches snapshot", function() {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
