import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/App.css';
import reportWebVitals from './reportWebVitals';
import ShootstaApolloProvider from './apollo/ShootstaApolloProvider';

ReactDOM.render(
  <React.StrictMode>
    <ShootstaApolloProvider />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();