import React, {Component} from 'react';
import classes from './Layout.css';
import ListBlock from '../../components/ListBlock/ListBlock';
import MessageBlock from '../../components/MessageBlock/MessageBlock';


class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameArray: ['Arjun', 'Rahul', 'Neha', 'Mohit', 'Megha', 'Abhishek'],
            selectedNameArray: [],
            messageObjs: {},
            activeUser: null
        };

        this.composeInput = React.createRef();
        this.websocket = null;
        this.targetValue = null;

    }

    userClickHandler = (e) => {
        const activeUser = e.target.innerText;
        e.target.classList.add('active');

        this.persistValueInLocalStorage(activeUser, 'activeUser');
        this.setState({
            activeUser
        });

        // Focusing on Input
        this.composeInput.current.focus();
    };

    onMessageComposeHandler = (e) => {
        if (parseInt(e.charCode) === 13 && this.state.activeUser) {
            this.targetValue = e.target.value;
            this.messageObjectUpdateHandler(this.targetValue, 'me');

            // Requesting the reply from websocket
            this.websocket.send(this.targetValue);
            e.target.value = null;
        }
    };

    messageObjectUpdateHandler = (message, sender) => {
        let obj = {};
        const dateNow = Date.now();
        const messageObjs = {...this.state.messageObjs};
        const activeUser = this.state.activeUser;

        let currentMsg = {
            message: message,
            sender: sender
        };

        if (messageObjs[activeUser]) {
            messageObjs[activeUser][dateNow] = currentMsg;
        } else {
            obj[dateNow] = currentMsg;
            messageObjs[activeUser] = obj;
        }

        this.persistValueInLocalStorage(messageObjs, 'messageObjs');
        this.setState({
            messageObjs
        });
    };

    onClickSuggestionUserHandler = (name) => {
        let addInListFlag = true;
        if(this.state.selectedNameArray){
            const selectedNameArray = [...this.state.selectedNameArray];

            selectedNameArray.forEach(user => {
                if (user == name) {
                    addInListFlag = false;
                }
            });

            addInListFlag && selectedNameArray.push(name);

            this.persistValueInLocalStorage(name, 'activeUser');
            this.setState({
                activeUser: name,
                selectedNameArray
            });

            // Focusing on Input
            this.composeInput.current.focus();

            this.persistValueInLocalStorage(selectedNameArray, 'selectedNameArray');
        }

    };


    persistValueFromLocalStorage = () => {
        let selectedNameArray = JSON.parse(window.localStorage.getItem('selectedNameArray'));
        if(!selectedNameArray){
            selectedNameArray = [];
        }

        let messageObjs = JSON.parse(window.localStorage.getItem('messageObjs'));
        if(!messageObjs){
            messageObjs = {};
        }

        let activeUser = JSON.parse(window.localStorage.getItem('activeUser'));

        this.setState({
            selectedNameArray,
            messageObjs,
            activeUser
        })
    };

    persistValueInLocalStorage = (obj, name) => {
        window.localStorage.setItem(name, JSON.stringify(obj));
    };


    componentDidMount() {
        var def = new Promise((resolve, reject) => {
            const wsUri = "wss://echo.websocket.org/";
            this.websocket = new WebSocket(wsUri);
            this.websocket ? resolve() : reject();
        });

        def.then((res) => {
            this.websocket.onmessage = evt => {
                this.messageObjectUpdateHandler(evt.data);

            };
        });

        def.catch((err)=> {
            alert(err);
        });

        this.persistValueFromLocalStorage();
    }



    render() {
        return (
            <div className={classes.Layout}>
                <ListBlock namesArray={this.state.nameArray}
                           selectedNameArray={this.state.selectedNameArray}
                           activeUser={this.state.activeUser}
                           clickSuggestionUser={this.onClickSuggestionUserHandler}
                           onUserClicked={this.userClickHandler} />
                
                <MessageBlock onMessageCompose={this.onMessageComposeHandler}
                              inputRef={this.composeInput}
                              activeUser={this.state.activeUser}
                              messageObjs={this.state.messageObjs}/>
            </div>
        )
    }
}

export default Layout;