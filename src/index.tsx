import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DialogsType, PostType} from "./components/TypeProps";




ReactDOM.render(<App posts={posts} dialogs={dialogs} message={message}/>, document.getElementById('root'));