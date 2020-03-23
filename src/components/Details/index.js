import React, { useState, useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import LocationBlock from "../LocationBlock/index.js"
import Person from "../Person"
import { LocationContext } from "../../context/index"
import Header from "../Header"
import "./details.scss"
const Details = () => {
  const history = useHistory()
  const PeopleData = {
    koramangala: [
      {
        name: "Rahul",
        awayTime: "3",
        routeOrigin: "koramangala",
        routeDetination: "WhiteField",
        car: "Polo",
        seatAvailable: "3",
        raiting: "4"
      },
      {
        name: "Krishna",
        awayTime: "3",
        routeOrigin: "koramangala",
        routeDetination: "WhiteField",
        car: "Polo",
        seatAvailable: "3",
        raiting: "4"
      },
      {
        name: "Megha",
        awayTime: "3",
        routeOrigin: "koramangala",
        routeDetination: "BTM",
        car: "Polo",
        seatAvailable: "3",
        raiting: "4.5"
      },
      {
        name: "Abhi",
        awayTime: "3",
        routeOrigin: "koramangala",
        routeDetination: "WhiteField",
        car: "Polo",
        seatAvailable: "2",
        raiting: "5"
      },
      {
        name: "Roy",
        awayTime: "4",
        routeOrigin: "koramangala",
        routeDetination: "WhiteField",
        car: "Polo",
        seatAvailable: "2",
        raiting: "5"
      },
      {
        name: "Rani",
        awayTime: "10",
        routeOrigin: "koramangala",
        routeDetination: "btm",
        car: "Maruti",
        seatAvailable: "1",
        raiting: "5"
      },
      {
        name: "Sohan",
        awayTime: "10",
        routeOrigin: "koramangala",
        routeDetination: "btm",
        car: "Maruti",
        seatAvailable: "1",
        raiting: "5"
      },
      {
        name: "Jay",
        awayTime: "10",
        routeOrigin: "koramangala",
        routeDetination: "btm",
        car: "Maruti",
        seatAvailable: "1",
        raiting: "5"
      }
    ],
    btm: [
      {
        name: "Rahul",
        awayTime: "3",
        routeOrigin: "btm",
        routeDetination: "WhiteField",
        car: "Polo",
        seatAvailable: "2",
        raiting: "3"
      },
      {
        name: "Neha",
        awayTime: "3",
        routeOrigin: "btm",
        routeDetination: "WhiteField",
        car: "Polo",
        seatAvailable: "2",
        raiting: "3"
      },
      {
        name: "Aditi",
        awayTime: "3",
        routeOrigin: "btm",
        routeDetination: "WhiteField",
        car: "Polo",
        seatAvailable: "2",
        raiting: "3"
      },
      {
        name: "Megha",
        awayTime: "3",
        routeOrigin: "btm",
        routeDetination: "koramangala",
        car: "Polo",
        seatAvailable: "3",
        raiting: "2.7"
      },
      {
        name: "Ajay",
        awayTime: "3",
        routeOrigin: "btm",
        routeDetination: "koramangala",
        car: "Polo",
        seatAvailable: "3",
        raiting: "2.7"
      },
      {
        name: "Atul",
        awayTime: "3",
        routeOrigin: "btm",
        routeDetination: "koramangala",
        car: "Polo",
        seatAvailable: "3",
        raiting: "2.7"
      },
      {
        name: "Abhi",
        awayTime: "3",
        routeOrigin: "btm",
        routeDetination: "WhiteField",
        car: "Polo",
        seatAvailable: "1",
        raiting: "4"
      },
      {
        name: "Jay",
        awayTime: "3",
        routeOrigin: "btm",
        routeDetination: "koramangala",
        car: "Polo",
        seatAvailable: "2",
        raiting: "4.8"
      }
    ]
  }

  const [locationData, setLocationData] = useContext(LocationContext)
  const [locationMap, setLoactionMap] = useState([
    { type: "origin", typeValue: "Start From", placeholderType: "origin" },
    {
      type: "destination",
      typeValue: "Destination",
      placeholderType: "destination"
    }
  ])
  const [selectedIndex, setIndex] = useState(null)

  useEffect(() => {
    setIndex(null)
  }, [locationData])

  const LocationDom =
    locationMap &&
    locationMap.map(el => {
      return (
        <LocationBlock
          type={el.type}
          typeValue={el.typeValue}
          placeholderType={el.placeholderType}
        />
      )
    })

  const setIndexHandler = index => {
    setIndex(index)
  }

  let confirmClass = "confirm-btn"
  if (selectedIndex !== null) {
    confirmClass = "confirm-btn active"
  }

  const confirmHandler = () => {
    if (selectedIndex !== null) {
      history.push("/confirmation")
    }
  }
  return (
    <div className="details">
      <div className="wrapper">
        <Header title="Pick A Ride" isProfile={true} />

        <div className="map-block">{LocationDom}</div>
        <div className="people-block">
          <Person
            locationData={locationData}
            peopleData={PeopleData}
            selectedIndex={selectedIndex}
            setIndexHandler={setIndexHandler}
          />
        </div>
        <div className="confirm-block">
          <button className={confirmClass} onClick={confirmHandler}>
            {" "}
            CONFIRM RIDE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Details
