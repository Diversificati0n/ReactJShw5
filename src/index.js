import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'; // Путь до store.js
import ThemeSwitcher from './ThemeSwitcher';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeSwitcher />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
