import { h, render } from 'preact';
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render((
    <App />
  ), document.getElementById('app'));
});
