import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import header from './header';
import description from './decription';

import * as serviceWorker from './serviceWorker';
import decription from './decription';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <header />
  <decription />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
