import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import Listen from './Listen';
import './index.css';

ReactDOM.render(  
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/listen" component={Listen}/>
  </Router>,
  document.getElementById('root')
);
