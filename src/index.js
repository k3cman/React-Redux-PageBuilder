import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/index.css'
import './css/style.css'
import './css/navy.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
