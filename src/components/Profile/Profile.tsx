import React from 'react';
import profile from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Posts/Post";


const Profile = () => {
    return <div>
        <div className={profile.content1}><img src="https://interier-foto.ru/wp-content/uploads/dlinnye-foto-7.jpg" alt='Photo' /></div>
        <div className={profile.content2}><img src='https://proprikol.ru/wp-content/uploads/2019/07/skachat-smeshnye-kartinki-zhivotnyh-1-1024x683.jpg' alt='peoplePhoto' /></div>
    <MyPosts/>
    </div>

}
export default Profile