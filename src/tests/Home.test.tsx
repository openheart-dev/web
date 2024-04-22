import {render, screen, userEvent} from '../utils/test-utils';
import Home from '../pages/Home';

it('should render the home page', () => {
  render(<Home />);

  expect(screen.getByText('Vite + React')).toBeDefined();
});
