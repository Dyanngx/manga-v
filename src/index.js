import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route,Link,useRouteMatch } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      {/* <Switch>
        <Route exact path='/' component = {Home} />
        <Route path='/login' component = {Login} />
        <Route path='/account' component = {Account} />
        <Route component = {NotFound} />
      </Switch> */}
      </App>
  </React.StrictMode>
);
serviceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
