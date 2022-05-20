import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Routes, Route,Link,useRouteMatch } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Account/Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <Routes>
        <Route exact path='/' element = {<Home/>} />
        <Route path='/login' component = {<Login/>} />
        {/* <Route path='/account' component = {Account} />
        <Route component = {NotFound} /> */}
      </Routes>
      </App>
  </React.StrictMode>
);
serviceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
