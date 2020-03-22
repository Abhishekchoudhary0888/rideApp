import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./components/Login/index.js"
import Register from "./components/Register/index.js"
import Details from "./components/Details/index.js"
import Confirmation from "./components/Confirmation/index.js"
import { LocationContext } from "./context/index"

function App() {
  const locationHook = useState({})
  return (
    <>
      <LocationContext.Provider value={locationHook}>
        <Router>
          <div>
            <Switch>
              <Route path="/details">
                <Details />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/confirmation">
                <Confirmation />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </div>
        </Router>
      </LocationContext.Provider>
    </>
  )
}

export default App
