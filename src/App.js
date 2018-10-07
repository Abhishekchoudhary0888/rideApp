import React, { Component } from 'react';
import Aux from './hoc/Aux/Aux';
import classes from './App.css'

import Layout from './container/Layout/Layout'

class App extends Component {
  render() {
    return (
      <Aux>
        <h1 className={classes.Title}>Messaging App</h1>
        <Layout />
      </Aux>
    );
  }
}

export default App;
