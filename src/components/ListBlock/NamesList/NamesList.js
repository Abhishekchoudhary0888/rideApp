import React from 'react';
import classes from './NamesList.css';
import NameUnit from './NameUnit/NameUnit'

const namesList = (props) => {
    let activeFlag = false;
    const nameBatch = props.namesArray && props.namesArray.map(name => {
        activeFlag = (name == props.activeUser) ? true : false;

        return <NameUnit name={name}
                         key={name}
                         activeFlag={activeFlag}
                         onUserClicked={props.onUserClicked}
                         activeUser={props.activeUser}/>
    });


    return (
        <ul className={classes.NameList}>
            {nameBatch}
        </ul>
    )
};

export default namesList;
