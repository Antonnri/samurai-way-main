import React from "react";
import {MessagesType} from "../TypeProps";
import s from "./Dialogs.module.css";
    

const Message: React.FC<MessagesType> = (props) => {
    return (
        <div className={s.messages}>{props.message} </div>
    )
}
export default Message