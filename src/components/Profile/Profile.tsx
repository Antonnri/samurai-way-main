import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import {PostsType} from "../TypeProps";
import Posts from "./MyPosts/MyPosts";


const Profile: React.FC<PostsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
{/*            <MyPosts:  Posts={props.Posts}/>*/}
        </div>
    )
}
export default Profile
