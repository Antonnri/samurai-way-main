import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import {ProfilePageType} from "../TypeProps";



const Profile: React.FC<ProfilePageType> = (props)=> {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile
