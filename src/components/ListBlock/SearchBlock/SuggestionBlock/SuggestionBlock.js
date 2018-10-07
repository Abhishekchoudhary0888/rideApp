import React from 'react';
import classes from './SuggestionBlock.css';

const suggestionBlock = (props) => {
    const nameList = props.namesArray.map(name => {
        return <li key={name}
                   onClick={() => {
                     props.clickSuggestionUser(name);
                     props.updateSuggestionFlag();
                     }
                   }>{name}</li>
    });

    return (
        <ul id="suggestionWrap" className={classes.SuggestionWrap}>
            {nameList}
        </ul>
    )
};

export default suggestionBlock;
