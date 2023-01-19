import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import {PostType} from "../TypeProps";



const Profile: React.FC<PostType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts />
        </div>
    )
}
export default Profile
