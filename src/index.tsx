import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



export let posts = [
    {id: 1, message: 'hi', likesCount: 11},
    {id: 2, message: 'Hello', likesCount: 12},
    {id: 3, message: 'Im happy!!!', likesCount: 23},
]

let dialogs = [
    {id: 1, name: 'Anton'},
    {id: 2, name: 'Katya'},
    {id: 3, name: 'Sergey'},
    {id: 4, name: 'Winipooh'},
]
let message = [
    {id: 1, massage: 'Hi'},
    {id: 1, massage: 'Hy'},
    {id: 1, massage: 'Very well'}
]


// @ts-ignore
ReactDOM.render(<App posts={posts} dialogs={dialogs} message={message} />,  document.getElementById('root'));