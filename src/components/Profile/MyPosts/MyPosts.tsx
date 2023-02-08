import React from 'react';
import profile from "./MyPosts.module.css"
import Post from "./Posts/Post";
import {NewPostElementType, ProfilePageType} from "../../TypeProps";


const MyPosts: React.FC<ProfilePageType> = (props) => {

    let postsElement =
        props.posts.map
        (p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>() ;


    // @ts-ignore
    let addPosts: React.FC<NewPostElementType> = (props) => {
        let text =  newPostElement.current!.value;
        alert(text)
    };

    return (
        <div className={profile.item}>
            <h3> My posts </h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                <div>
                    <button onClick={addPosts}>Add post</button>
                </div>
            </div>
            <div className={profile.item}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts