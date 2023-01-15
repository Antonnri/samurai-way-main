import React from 'react';
import dialogs from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogsType, DialogsItemType, MessageType} from "../TypeProps";


const DialogsItem: React.FC<DialogsItemType> = (props) => {
    return (
        <div className={dialogs.dialog + ' ' + dialogs.active}>
            <NavLink to={'/dialogs/1' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={dialogs.message}>{props.messages}</div>
    )
}


const Dialogs: React.FC<DialogsType> = () => {

    let dialogsData = [
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
    return (
        <div className={dialogs.dialogs}>
            <div>
                <div className={dialogs.dialogItems}>
                    <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                </div>
            </div>
            <div>
                <div className={dialogs.messages}>
                    <Message messages={messageData[0].massage} id={messageData[0].id}/>
                    <Message messages={messageData[1].massage} id={messageData[1].id}/>
                    <Message messages={messageData[2].massage} id={messageData[2].id}/>
                </div>
            </div>
        </div>
    )

}
export default Dialogs;