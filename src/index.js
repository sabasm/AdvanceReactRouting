import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//engañar al navegador y al usuario MUAHAHAHA :[ :[ :[!
import {BrowserRouter} from 'react-router-dom'
const WithRouther = () => <BrowserRouter><App/></BrowserRouter>

ReactDOM.render(<WithRouther />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
