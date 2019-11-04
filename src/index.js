import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './screens/Menu';
import Test from './screens/Test';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Test q={5} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
