import React from 'react';
import profile from "./MyPosts.module.css"
import Post from "./Posts/Post";


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={profile.item}>
                <Post message='Hi'/>
                <Post message='Hello'/>
            </div>
        </div>
    )
}
export default MyPosts