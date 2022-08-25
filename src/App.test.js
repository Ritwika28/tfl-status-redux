import { render as rtlRender, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

const render = component => rtlRender(
  <Provider store={store}>
  <App/>
</Provider>
)

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Transport for London/i);
  expect(linkElement).toBeInTheDocument();
});
