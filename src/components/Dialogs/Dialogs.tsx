import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogsType, DialogsItemType, MessageType} from "../TypeProps";


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
        <div className={s.messages}>{props.messages}</div>
    )
}


const Dialogs: React.FC<DialogsType> = (props) => {

/*    let dialogsElements = props.d.map(d => <DialogsItem name={Dialogs.name} id={Dialogs.id}/>);
    let messegesElements = props.m.map(m => <Message messages={Message.massage} id={Message.id}/>);*/

    return (
        <div className={s.dialogs}>
            <div>
                <div className={s.dialogItems}>
                    {/*{dialogsElements}*/}
                </div>
            </div>
            <div>
                <div className={s.messages}>
{/*                    {messegesElements}*/}
                </div>
            </div>
        </div>
    )

}
export default Dialogs;