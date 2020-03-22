import React from "react"
// import classes from "./login.scss"
import Header from "../Header"
import "./confirmation.scss"
const Confirmation = () => {
  return (
    <div className="confirmation">
      <div className="wrapper">
        <Header title="Ride status" isProfile={true} />
        <h2 className="heading"> Your ride is confirmed !!</h2>
      </div>
    </div>
  )
}

export default Confirmation
