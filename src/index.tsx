import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./components/redux/state";
import {addPost} from "./components/redux/state";



addPost("newPost");



ReactDOM.render(<App state={state}/>, document.getElementById('root'));


