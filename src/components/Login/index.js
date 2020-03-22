import React, { useState, useEffect, useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import Header from "../Header"
// import classes from "./login.scss"

import "./login.scss"
const Login = () => {
  const history = useHistory()
  // const [flag, setflag] = useState(true)
  const [userName, setUserName] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [invalidFlag, setInvalidFlag] = useState(false)
  const nameHandler = e => {
    setUserName(e.target.value)
    setInvalidFlag(false)
  }

  const passwordHandler = e => {
    setUserPassword(e.target.value)
    setInvalidFlag(false)
  }

  const onSubmitHandler = e => {
    e.preventDefault()
    let userAuthenticated = false
    const userCredentials =
      JSON.parse(
        window &&
          window.localStorage &&
          window.localStorage.getItem("userCredentials")
      ) || []

    let identifykey = parseInt(userName) === "NaN" ? "email" : "mobile"

    userCredentials.forEach(el => {
      if (
        userName.length > 0 &&
        el[identifykey] === userName &&
        userPassword.length > 0 &&
        el["password"] === userPassword
      ) {
        userAuthenticated = true
      }
      // break
    })

    if (userAuthenticated) {
      history.push("/details")
    } else {
      setInvalidFlag(true)
    }
    // const { name, password } =
    //   (userCredentials && userCredentials[userName]) || {}

    // if (userCredentials[userName])
    //   if (name === userName && password === userPassword) {
    //     history.push("/register")
    //   }
    // window.localStorage.setItem("userCredentials") = {
    //   ...userCredentials,
    //   userName: { name: userName, password: userPassword }
    // }
  }
  return (
    <div className="login">
      <div className="wrapper">
        <Header title={"Login to App"} />
        <div className="container">
          <label>
            <h2>Username</h2>
            <input
              type="text"
              placeholder="10 digit mobile number/email id"
              onChange={nameHandler}
            />
          </label>
          <label>
            <h2>Password</h2>
            <input
              type="password"
              placeholder="password"
              onChange={passwordHandler}
            />
          </label>
          <div className="button-row">
            {invalidFlag && <span className="invalid">Invaild Credential</span>}
            <button onClick={onSubmitHandler}>Login</button>
          </div>
        </div>
        <div className="register-row">
          Dont have an account?{" "}
          <span>
            <Link to="/register">REGISTER NOW</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
