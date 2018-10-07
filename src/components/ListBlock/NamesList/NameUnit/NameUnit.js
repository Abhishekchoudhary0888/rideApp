import React from 'react';
import classes from './NameUnit.css';

const nameUnit = (props) => {

    let myClasses = [classes.User];
    if(props.activeFlag){
        myClasses = [classes.User, classes.Active ];
    }

    return (
        <li className={myClasses.join(' ')}
        onClick={props.onUserClicked}>{props.name}</li>
    )
};

export default nameUnit;
