import React from "react";
import {AddPostType, PostMessageType} from "../TypeProps";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'hi', likesCount: 11},
            {id: 2, message: 'Hello', likesCount: 12},
            {id: 3, message: 'Im happy!!!', likesCount: 23}
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 1, message: 'Hy'},
            {id: 1, message: 'Very well'},
            {id: 12, message: 'sjkdvbjaskvbsd'}
        ],
        dialogsUserName: [
            {id: 1, name: 'Anton'},
            {id: 2, name: 'Katya'},
            {id: 3, name: 'Sergey'},
            {id: 4, name: 'Winipooh'},
        ],
    },
    sidebar: {},
}


export let addPost: React.FC<AddPostType> = (props) => {
    let  newPost = {
        id: 1,
        message: 'Hi',
        likesCount: 11
    };
    state.profilePage.posts.push(newPost)
}


export default state;



