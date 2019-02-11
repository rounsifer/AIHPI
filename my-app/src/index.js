import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LogIn from './LogIn';
import Game from './Game';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<center><Game /></center>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();