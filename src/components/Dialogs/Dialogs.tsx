import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogsItemType, DialogsPageType, MessageType} from "../TypeProps";
import state from "../redux/state"
import Message from "./Message";
import DialogsItem from "./DialogsItem";


const Dialogs: React.FC<DialogsPageType> = (props) => {
debugger;
    let dialogsElements = props.dialogsItem.map( d => <DialogsItem name={d.name} id={d.id}/>);
    let messegesElements = props.messages.map( m => <Message message={m.message} id={m.id}/>);

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