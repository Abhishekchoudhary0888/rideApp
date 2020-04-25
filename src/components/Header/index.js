import React from "react"
import { useHistory } from "react-router-dom"
import "./header.scss"
import ProfileImg from "../../assets/logo.svg"

const Header = React.memo((props) => {
  const history = useHistory()
  const clickHandler = () => {
    history.push("/")
  }
  return (
    <div className="header">
      <img
        className="profile-img"
        src={ProfileImg}
        alt="Profile"
        width="80"
        onClick={clickHandler}
      />
    </div>
  )
})

export default Header
