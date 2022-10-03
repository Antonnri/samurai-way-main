import React from 'react';
import profile from "./Post.module.css"


const Post = (props: any) => {
    return <div className={profile.item}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHiOTO6Bx8rRGL70R7dfdBJqYZG2PxLsQn6g&usqp=CAU'/>
        {props.message}
        <div>
            <span>Like</span>
            <span>Repeat</span>
        </div>
    </div>

}
export default Post