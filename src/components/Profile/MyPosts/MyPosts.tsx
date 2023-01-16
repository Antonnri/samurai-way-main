import React from 'react';
import profile from "./MyPosts.module.css"
import Post from "./Posts/Post";


const MyPosts = () => {
    let posts = [
        {id: 1, message: 'hi', likesCount: 11},
        {id: 2, message: 'Hello', likesCount: 12},
        {id: 3, message: 'Im happy!!!', likesCount: 23},
    ]
    let postsElement = posts
        .map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={profile.item}>
            <h3> My posts </h3>
            <div>
                <div><textarea>пишу в MyPosts</textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={profile.item}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts