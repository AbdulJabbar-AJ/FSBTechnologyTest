import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Counter from '../js/components/Counter';


test('Fake Test', () => {
  expect(true).toBeTruthy()
})


// test('renders counter', () => {
//   const { comp } = render(<Counter active='true' />);
//   const linkElement = getByText(/Games  list/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('Some test name', () => {
  const { getByTestId } = render( <Counter />)
  const counter = getByTestId('counter')
  expect(counter).toHaveTextContent('Quantity')
})

it('Some test name', () => {
  const { getByTestId } = render( <Counter />)
  const counter = getByTestId('counter')
  expect(counter).toHaveClass('counter')
})
