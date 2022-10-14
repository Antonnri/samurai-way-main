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
    return (
        <div className={dialogs.dialogs}>
            <div>
                <div className={dialogs.dialogItems}>
                    <DialogsItem name='Anton' id={1}/>
                    <DialogsItem name='Katya' id={2}/>
                        <DialogsItem name='Sergey' id={3}/>
                        <DialogsItem name='Winipooh' id={4}/>
                </div>
            </div>
            <div>
                <div className={dialogs.messages}>
                    <Message messages='Hi' id={1}/>
                    <Message messages='Hy' id={2}/>
                    <Message messages='Very well' id={3}/>
                </div>
            </div>
        </div>
)

}
export default Dialogs;