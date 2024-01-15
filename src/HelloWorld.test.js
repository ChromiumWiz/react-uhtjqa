// HelloWorld.test.js
import React from 'react';
import { render } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('renders hello world with a name', () => {
  const { getByText } = render(<HelloWorld name="John" />);
  const helloWorldElement = getByText(/hello, john/i);
  expect(helloWorldElement).toBeInTheDocument();
});
