import React from "react";
import {DialogsItemType} from "../TypeProps";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import state from "../redux/state";

const DialogsItem: React.FC<DialogsItemType> = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}>{state.dialogsPage.dialogsItem}</NavLink>
        </div>
    )
}
export default DialogsItem