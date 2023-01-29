import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogsPageType, DialogsItemType, MessageType} from "../TypeProps";
import state from "../redux/state"


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

const Dialogs: React.FC<DialogsPageType> = (props) => {

    let dialogsElements = state.dialogsPage.dialogsItem.map( d => <DialogsItem name={d.name} id={d.id}/>);
    let messegesElements = state.dialogsPage.message.map( m => <Message message={m.message} id={m.id}/>);

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