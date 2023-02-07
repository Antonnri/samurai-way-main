import React from "react";
import {DialogsUserNameType} from "../TypeProps";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";




const DialogsUserName: React.FC<DialogsUserNameType> = (props) => {
    let path = '/Messages/' + props.id;
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogsUserName