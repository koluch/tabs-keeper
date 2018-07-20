import { h, render } from 'preact';
import App from './components/App'

console.log("process.env.NODE_ENV", process.env.NODE_ENV)

document.addEventListener('DOMContentLoaded', () => {
  render((
    <App />
  ), document.getElementById('app'));
});
