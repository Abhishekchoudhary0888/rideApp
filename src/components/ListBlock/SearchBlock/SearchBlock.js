import React from 'react';
import classes from './SearchBlock.css';
import SuggestionBlock from './SuggestionBlock/SuggestionBlock';


class SearchBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            suggestionFlag: false
        };
    }

    onFocusHandler = () => {
        this.setState({
            suggestionFlag: true
        });
    };

    onBlurHandler = (e) => {
        e.target.value="";
        setTimeout(()=>{
            this.setState({
                suggestionFlag: false
            });
        },100);
    };

    updateSuggestionFlagHandler = () => {
        this.setState({
            suggestionFlag: false
        });
    };

    filterNameHandler = (e) => {
        let name = e.target.value,
            ul = document.querySelector('#suggestionWrap'),
            li = ul.getElementsByTagName("li");


        Array.prototype.slice.call(li, 0).forEach((liUnit)=> {
            if (liUnit.innerHTML.toUpperCase().indexOf(name.toUpperCase()) > -1) {
                liUnit.style.display = "";
            } else {
                liUnit.style.display = "none";
            }
        });
    };

    render() {
        let suggestionBlock = null;

        if (this.state.suggestionFlag) {
            suggestionBlock = (
                <SuggestionBlock namesArray={this.props.namesArray}
                                 updateSuggestionFlag={this.updateSuggestionFlagHandler}
                                 clickSuggestionUser={this.props.clickSuggestionUser}/>
            )
        }
        return (
            <div className={classes.SearchBlock}>
                <input className={classes.Input}
                       type="text"
                       placeholder="Search your friend"
                       onFocus={this.onFocusHandler}
                       onBlur={this.onBlurHandler}
                       onKeyUp={this.filterNameHandler}/>
                {suggestionBlock}
            </div>
        )
    }
}

export default SearchBlock;
