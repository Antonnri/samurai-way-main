import React from 'react';
import profile from "./MyPosts.module.css"
import Post from "./Posts/Post";
import {PostsType,} from "../../TypeProps";
import {message} from "antd";




const Posts: React.FC<PostsType> = (props) => {

/*    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);*/

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
 {/*               {postsElement}*/}
            </div>
        </div>
    )
}
export default Posts