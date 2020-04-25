import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Customers from "./components/Customers/index.js"

import { UserContext, UserSelectionContext } from "./context/index"

function App() {
  const userHook = useState([])
  const userSelectionHook = useState("")
  return (
    <>
      <UserContext.Provider value={userHook}>
        <UserSelectionContext.Provider value={userSelectionHook}>
          <Router>
            <div>
              <Switch>
                <Route path="/">
                  <Customers />
                </Route>
              </Switch>
            </div>
          </Router>
        </UserSelectionContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
