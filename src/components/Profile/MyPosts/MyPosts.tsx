import React from 'react';
import profile from "./MyPosts.module.css"
import Post from "./Posts/Post";


const MyPosts = () => {
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
                <Post message='Hi'/>
                <Post message='Hello'/>
            </div>
        </div>
    )
}
export default MyPosts