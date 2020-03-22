import React, { useState, useEffect, useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import Header from "../Header"
import "./register.scss"
const Register = props => {
  const history = useHistory()
  // const [flag, setflag] = useState(true)
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userMobile, setUserMobile] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [userRepeatPassword, setUserRepeatPassword] = useState("")
  const [userCarModal, setUserCarModal] = useState("")

  const [validateFlag, setValidateFlag] = useState(false)
  const [userValidateObj, setUserValidateObj] = useState({
    name: false,
    email: false,
    password: false,
    repeatPassword: false,
    mobile: false,
    carModal: false
  })

  const nameHandler = e => {
    const value = e.target.value
    setUserName(value)

    if (value && value.length > 1) {
      setUserValidateObj({ ...userValidateObj, name: true })
    } else if (validateFlag) {
      setUserValidateObj({ ...userValidateObj, name: false })
    }
  }

  const emailHandler = e => {
    const value = e.target.value
    setUserEmail(value)
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (value && re.test(value)) {
      setUserValidateObj({ ...userValidateObj, email: true })
    } else if (validateFlag) {
      setUserValidateObj({ ...userValidateObj, email: false })
    }
  }

  const mobileHandler = e => {
    const value = e.target.value
    setUserMobile(value)

    if (value && value.length === 10) {
      setUserValidateObj({ ...userValidateObj, mobile: true })
    } else if (validateFlag) {
      setUserValidateObj({ ...userValidateObj, mobile: false })
    }
  }

  const passwordHandler = e => {
    const value = e.target.value
    setUserPassword(value)

    if (value && value.length > 1) {
      setUserValidateObj({ ...userValidateObj, password: true })
    } else if (validateFlag) {
      setUserValidateObj({ ...userValidateObj, password: false })
    }
  }

  const repeatPasswordHandler = e => {
    const value = e.target.value
    setUserRepeatPassword(value)

    if (value && value === userPassword) {
      setUserValidateObj({ ...userValidateObj, repeatPassword: true })
    } else if (validateFlag) {
      setUserValidateObj({ ...userValidateObj, repeatPassword: false })
    }
  }

  const carModalHandler = e => {
    const value = e.target.value
    setUserCarModal(value)

    if (value && value.length > 1) {
      setUserValidateObj({ ...userValidateObj, carModal: true })
    } else if (validateFlag) {
      setUserValidateObj({ ...userValidateObj, carModal: false })
    }
  }

  const isValidateForm = () => {
    setValidateFlag(true)
    const inValidArr = Object.keys(userValidateObj).filter(key => {
      return userValidateObj[key] === false
    })

    return !(inValidArr.length > 0)
  }
  const onSubmitHandler = e => {
    e.preventDefault()
    if (isValidateForm()) {
      let userCredentials =
        JSON.parse(
          window &&
            window.localStorage &&
            window.localStorage.getItem("userCredentials")
        ) || []

      userCredentials.push({
        name: userName,
        email: userEmail,
        mobile: userMobile,
        password: userPassword,
        carModal: userCarModal
      })

      window.localStorage.setItem(
        "userCredentials",
        JSON.stringify(userCredentials)
      )
      history.push("/details")
    }
  }

  let nameClass = ""
  let emailClass = ""
  let mobileClass = ""
  let passwordClass = ""
  let repeatPasswordClass = ""
  let carModalClass = ""

  if (validateFlag) {
    nameClass = userValidateObj.name ? "" : "errorField"
    emailClass = userValidateObj.email ? "" : "errorField"
    mobileClass = userValidateObj.mobile ? "" : "errorField"

    passwordClass = userValidateObj.password ? "" : "errorField"
    repeatPasswordClass = userValidateObj.repeatPassword ? "" : "errorField"
    carModalClass = userValidateObj.carModal ? "" : "errorField"
  }

  return (
    <div className="login">
      <div className="wrapper">
        <Header title="Register to App" />
        <form className="container">
          <label className={nameClass}>
            <h2>Full Name</h2>
            <input
              type="text"
              placeholder="enter your first and last name"
              onChange={nameHandler}
            />
            <span className="error">Enter valid name</span>
          </label>

          <label className={emailClass}>
            <h2>Email ID</h2>
            <input
              type="email"
              placeholder="enter your email ID"
              onChange={emailHandler}
            />
            <span className="error">Enter valid email</span>
          </label>

          <label className={mobileClass}>
            <h2>Mobile Number</h2>
            <input
              type="number"
              placeholder="enter your 10 digit mobile number"
              onChange={mobileHandler}
            />
            <span className="error">Enter valid mobile number</span>
          </label>
          <label className={passwordClass}>
            <h2>Password</h2>
            <input
              type="password"
              placeholder="set your password"
              onChange={passwordHandler}
            />
            <span className="error">Enter valid password</span>
          </label>
          <label className={repeatPasswordClass}>
            <h2>Re-enter Password</h2>
            <input
              type="password"
              placeholder="re-enter your password"
              onChange={repeatPasswordHandler}
            />
            <span className="error">Enter valid/same password</span>
          </label>
          <label className={carModalClass}>
            <h2>Car modal</h2>
            <input
              type="text"
              placeholder="name of the car you have"
              onChange={carModalHandler}
            />
            <span className="error">Enter valid car modal</span>
          </label>

          <div className="button-row">
            <button onClick={onSubmitHandler}>Register</button>
          </div>
        </form>
        <div className="register-row">
          Already have an account ?{" "}
          <span>
            <Link to="/">LOGIN NOW</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Register
