import React, { useState, useEffect, useContext } from "react"
import { UserSelectionContext } from "../../context/index"
import "./customerDetailsTable.scss"

const CustomerDetailsTable = React.memo((props) => {
  const { customerData = [] } = props || {}

  const [customersSelection, setCustomersSelection] = useContext(
    UserSelectionContext
  )

  const fundClickHandler = async (id) => {
    setCustomersSelection(id)
  }

  let tableContent = ""
  tableContent =
    customerData &&
    Object.values(customerData[0]).map((obj, index) => {
      const { id = "", name = "", sex = "", age = "" } = obj || {}
      return (
        <tr onClick={() => fundClickHandler(id)}>
          <td>{index + 1}</td>
          <td>{id}</td>
          <td>{name}</td>
          <td>{sex}</td>
          <td>{age}</td>
        </tr>
      )
    })
  return <>{tableContent}</>
})

export default CustomerDetailsTable
