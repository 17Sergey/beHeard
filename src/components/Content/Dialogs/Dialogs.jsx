import React from "react";
import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import NewMessage from "./NewMessage/NewMessage";

const Dialogs = (props) => {
    
    let dialogsElements = props.dialogs
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />);
    let messagesElements = props.messages
        .map(message => <MessageItem key={message.id} message={message.message} />);

    return (
        <>
            <NewMessage addMessage={props.addMessage}/>
            
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </>
    );
}

export default Dialogs;