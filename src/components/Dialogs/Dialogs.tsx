import React from 'react';
import s from "./Dialogs.module.css"
import {DialogsPageType} from "../TypeProps";
import Message from "./Message";
import DialogsUserName from "./DialogsUserName";


debugger;

const Dialogs: React.FC<DialogsPageType> = (props) => {

    let dialogsElements = props.dialogsUserName.map(d => <DialogsUserName name={d.name} id={d.id}/>);
    let messegesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>);

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