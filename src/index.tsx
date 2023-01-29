import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {stateType} from "./components/TypeProps";
import state from "./components/redux/state";




// @ts-ignore
ReactDOM.render(<App state={state}/>, document.getElementById('root'));