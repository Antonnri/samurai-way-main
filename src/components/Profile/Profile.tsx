import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import {PostType} from "../TypeProps";



const Profile: React.FC<PostType> = (props)=> {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts message={props.message} id={props.id} likesCount={props.likesCount}/>
        </div>
    )
}
export default Profile
