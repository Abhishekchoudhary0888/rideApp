import React, { useState, useEffect, useContext } from "react"
import PersonDetails from "../PersonDetail"

const Person = props => {
  const { locationData, peopleData, selectedIndex, setIndexHandler } =
    props || {}
  const [rideCount, setRideCount] = useState(0)

  let peopleDom = ""
  let peopleArray = []
  locationData &&
    Object.keys(locationData).forEach(key => {
      if (key === "origin") {
        const originArray = Object.keys(peopleData).filter(el => {
          return el === locationData["origin"]
        })
        if (originArray.length > 0) {
          peopleArray = peopleData[originArray[0]].filter(ppl => {
            if (ppl.routeDetination && locationData["destination"]) {
              return (
                ppl.routeDetination.toLowerCase() ===
                locationData["destination"].toLowerCase()
              )
            }
          })
        }
      }
    })

  if (peopleArray.length > 0) {
    peopleDom = peopleArray.map((obj, index) => {
      return (
        <PersonDetails
          key={index}
          indexNumber={index}
          selectedIndex={selectedIndex}
          setRideCount={setRideCount}
          rideCount={rideCount}
          setIndexHandler={setIndexHandler}
          obj={obj}
        />
      )
    })
  }
  return <>{peopleDom}</>
}

export default Person
