import React from 'react';
import classes from './MessageBlock.css';
import ComposeUnit from './ComposeUnit/ComposeUnit';
import Message from './Message/Message';

const messageBlock = (props) => {
    let message = null;
    const activeUser = props.activeUser;
    if (activeUser) {
        let activeUserMessages = props.messageObjs[activeUser];

        if (activeUserMessages) {
            message = Object.keys(activeUserMessages).map((msgKey, index) => {
                return <Message key={index}
                                activeUserName={activeUser}
                                sender={activeUserMessages[msgKey]["sender"]}
                                msg={activeUserMessages[msgKey]["message"]}/>
            });
        }

    }

    return (
        <div className={classes.MessageBlock}>
            <ul className={classes.MessageListUL}>
                {message}
            </ul>
            <ComposeUnit onMessageCompose={props.onMessageCompose}
                         activeUser={activeUser}
                         inputRef={props.inputRef} />
        </div>
    )
};

export default messageBlock;
