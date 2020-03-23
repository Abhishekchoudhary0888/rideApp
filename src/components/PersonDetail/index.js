import React, { useState, useEffect, useContext } from "react"
import "./person.scss"
import Avatar from "./images/avatar.jpg"
import SelectedRide from "./images/selected.jpg"
import Phone from "./images/phone.jpg"
const PersonDetail = props => {
  const {
    selectedIndex,
    indexNumber,
    setIndexHandler,
    obj: {
      name = "",
      awayTime,
      routeOrigin,
      routeDetination,
      car,
      raiting,
      seatAvailable
    } = {}
  } = props || {}

  const active = indexNumber === selectedIndex ? true : false
  //   const riderSelectHandler = () => {
  //     setIndexHandler()
  // if (active) {
  //   setActive(!active)
  //   props.setRideCount(props.rideCount - 1)
  // } else {
  //   if (props.rideCount === 0) {
  //     setActive(!active)
  //     props.setRideCount(props.rideCount + 1)
  //   }
  // }
  //   }

  let avtarBlock
  let ratingBlock
  if (active) {
    avtarBlock = (
      <div className="avatar">
        <img src={SelectedRide} alt="SelectedRide" className="avatar-img" />
      </div>
    )
    ratingBlock = (
      <div className="raiting">
        <img src={Phone} alt="Phone" className="avatar-img" />
      </div>
    )
  } else {
    avtarBlock = (
      <div className="avatar">
        <img src={Avatar} alt="Avatar" className="avatar-img" />
      </div>
    )
    ratingBlock = (
      <div className="raiting">
        <span className="raitingvalue">{raiting}</span> |{" "}
        <span className="star">★</span>
      </div>
    )
  }
  return (
    <div
      className={indexNumber === selectedIndex ? "person active" : "person"}
      onClick={() => setIndexHandler(indexNumber)}
    >
      {avtarBlock}
      <div className="detail">
        <div>
          <h3>{name}</h3>
          <span className="min-text">{awayTime} min(s) away</span>
        </div>
        <div className="row">
          <span>route</span>:
          <span className="journey">{`${routeOrigin} to ${routeDetination}`}</span>
        </div>
        <div>
          <span>
            car: <span className="car">{car}</span>
          </span>{" "}
          <span className="seatavailable">
            seat available: <span className="seatnumber">{seatAvailable}</span>
          </span>
        </div>
      </div>
      {ratingBlock}
    </div>
  )
}

export default PersonDetail
