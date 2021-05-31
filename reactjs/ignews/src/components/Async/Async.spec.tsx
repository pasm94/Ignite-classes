import {
  render,
  screen,
  waitFor,
  waitForElement,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { Async } from '.';

test('it renders correctly', async () => {
  render(<Async />);

  expect(screen.getByText('Hello World')).toBeInTheDocument();

  await waitForElementToBeRemoved(screen.queryByText('Button2'));
  // eh o mesmo que
  // await waitFor(() => {
  //   return expect(screen.queryByText('Button2')).not.toBeInTheDocument();
  // });

  await waitFor(() => {
    return expect(screen.getByText('Button')).toBeInTheDocument();
  });
});
