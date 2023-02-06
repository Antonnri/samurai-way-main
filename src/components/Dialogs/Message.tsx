import React from "react";
import {MessageType} from "../TypeProps";
import s from "./Dialogs.module.css";

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.messages}>{props.message}</div>
    )
}
export default Message