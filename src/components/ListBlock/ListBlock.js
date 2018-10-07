import React from 'react';
import classes from './ListBlock.css';

import SearchBlock from './SearchBlock/SearchBlock';
import NamesList from './NamesList/NamesList';

const listBlock = (props) => {
    return (
        <div className={classes.ListBlock}>
            <SearchBlock  namesArray={props.namesArray}
                          clickSuggestionUser={props.clickSuggestionUser} />
            <NamesList  namesArray={props.selectedNameArray}
                        onUserClicked = {props.onUserClicked}
                        activeUser = {props.activeUser} />
        </div>
    )
};

export default listBlock;
