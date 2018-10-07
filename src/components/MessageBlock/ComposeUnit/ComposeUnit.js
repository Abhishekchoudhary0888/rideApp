import React from 'react';
import classes from './ComposeUnit.css';

const composeUnit = (props) => {
    let placeholder = props.activeUser ? ("Message " + props.activeUser) : "Message ";

    return (
        <div className={classes.ComposeUnit}>
            <input className={classes.Input}
                   type="text"
                   ref={props.inputRef}
                   placeholder={placeholder}
                   onKeyPress={props.onMessageCompose} />
        </div>
    )
};

export default composeUnit;
