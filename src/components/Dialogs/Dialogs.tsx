import React from 'react';
import s from "./Dialogs.module.css"
import {DialogsPageType, NewMessageElementType} from "../TypeProps";
import Message from "./Message";
import DialogsUserName from "./DialogsUserName";


const Dialogs: React.FC<DialogsPageType> = (props) => {

    let dialogsElements = props. dialogsUserName.map(d => <DialogsUserName name={d.name} id={d.id}/>);
    let messegesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>);

    let help = props.dialogsUserName
    console.log(help)

    let textMessage = React.createRef<HTMLTextAreaElement>() ;
    // @ts-ignore
    let addMessage: React.FC<NewMessageElementType> = (props) => {
        let text =  textMessage.current!.value;
        alert(text)
    };


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
                <div><textarea ref={textMessage}></textarea></div>
                <div>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

