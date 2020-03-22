import React, { useState, useEffect, useContext } from "react"
// import classes from "./login.scss"

import Profile from "../Profile"
import "./header.scss"
import ProfileImg from "./images/profile.jpg"

const Header = props => {
  const { title = "", isProfile = false } = props || {}
  const [profileState, setProfileState] = useState(false)
  return (
    <div className="header">
      <h2>{title}</h2>
      {isProfile && (
        <img
          className="profile-img"
          src={ProfileImg}
          alt="Profile"
          width="30"
          height="30"
          onClick={() => setProfileState(!profileState)}
        />
      )}

      {profileState && (
        <div className="profile-block">
          <Profile />
        </div>
      )}
    </div>
  )
}

export default Header
