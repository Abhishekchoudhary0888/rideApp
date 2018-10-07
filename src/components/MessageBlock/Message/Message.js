import React from 'react';
import classes from './Message.css';


const message = (props) => {
    const myClassName = props.sender ? [classes.Message, classes.Me] : [classes.Message];
    const senderName = props.sender ? props.sender : props.activeUserName;

    return (
        <li className={myClassName.join(' ')}>
            {props.msg}
            <span className={classes.Sender}>{senderName}</span>
        </li>
    )
};

export default message;
