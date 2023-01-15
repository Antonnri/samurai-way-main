import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogsType, DialogsItemType, MessageType} from "../TypeProps";



const DialogsItem: React.FC<DialogsItemType> = (props) => {
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={'/dialogs/1' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.messages}>{props.messages}</div>
    )
}


const Dialogs: React.FC<DialogsType> = () => {

    let dialogs = [
        {id: 1, name: 'Anton'},
        {id: 2, name: 'Katya'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Winipooh'},
    ]
    let messageData = [
        {id: 1, massage: 'Hi'},
        {id: 1, massage: 'Hy'},
        {id: 1, massage: 'Very well'}
    ]

    let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);
    let messegesElements = messageData.map(m => <Message messages={m.massage} id={m.id}/>);

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