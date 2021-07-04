import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let content = [
  {routeName: 'Главная страница', routeUrl: '/main'},
  {routeName: 'Страница 1', routeUrl: '/link1'},
  {routeName: 'Страница 2',  routeUrl: '/link2'},
  {routeName: 'Страница 3',  routeUrl: '/link3'},
  {routeName: 'Страница 4',  routeUrl: '/link4'}
]

ReactDOM.render(
  <React.StrictMode>
    <App content={content}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
