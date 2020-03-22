import React, { useState, useEffect, useContext } from "react"
import "./location.scss"
import { LocationContext } from "../../context/index"

const LocationBlock = props => {
  const [locationData, setLocationData] = useContext(LocationContext)

  const setLocationHandler = e => {
    const updatedLocation = {
      ...locationData,
      [props.type]: e.target.value
    }
    setLocationData(updatedLocation)
  }
  return (
    <div className="location-block">
      <h3>{props.typeValue} </h3>

      <input
        type="text"
        placeholder={props.placeholderType}
        onChange={setLocationHandler}
      />
    </div>
  )
}

export default LocationBlock
