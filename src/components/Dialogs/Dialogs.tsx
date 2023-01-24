import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogsType, DialogsItemType, MessageType} from "../TypeProps";
import state from "../../State"


const DialogsItem: React.FC<DialogsItemType> = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.messages}>{props.message}</div>
    )
}


const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogsElements = props.DialogsItem.map(d => <DialogsItem name={state.dialogsPage.dialogsItem.name}  id={state.dialogsPage.dialogsItem.id}/>);
    let messegesElements = state.dialogsPage.message.map(m => <Message messages={state.dialogsPage.message.massage} id={state.dialogsPage.message.id}/>);

    return (
        <div className={s.dialogs}>
            <div>
                <div className={s.dialogItems}>
                    {dialogsElements}
                </div>
            </div>
            <div>
                <div className={s.messages}>
                    {messegesElements}
                </div>
            </div>
        </div>
    )

}
export default Dialogs;