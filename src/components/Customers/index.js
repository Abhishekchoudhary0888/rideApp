import React, { useState, useEffect, useContext } from "react"
import Header from "../Header"
import Loading from "../Loading"
import "./customer.scss"
import CustomerDetailsTable from "../CustomerDetailsTable"
import { UserContext, UserSelectionContext } from "../../context/index"

import { fetchCustomerDetailstGetApi } from "../../utils/apiBase"

const Customers = (props) => {
  const [customersData, setCustomersData] = useContext(UserContext)
  const [customersSelection, setCustomersSelection] = useContext(
    UserSelectionContext
  )
  const [isLoading, setLoading] = useState(true)
  const [addressInfo, setAddressInfo] = useState("")

  useEffect(() => {
    if (customersData.length === 0) {
      getCustomerData()
    }
  }, [])

  useEffect(
    () => {
      customersSelection && populateAddress()
    },
    [customersSelection]
  )

  const populateAddress = () => {
    const id = customersSelection
    let selectedCustomer
    let addressDom = ""
    if (customersData) {
      selectedCustomer = customersData && customersData[0][id]
      let addressArr = selectedCustomer.address
      addressDom = addressArr.map((el) => {
        return <li>{el}</li>
      })

      setAddressInfo(addressDom)
    }
  }

  const getCustomerData = async () => {
    const customerResponse = await fetchCustomerDetailstGetApi()
    const { status, data = {} } = customerResponse || {}

    if (status === 200) {
      setLoading(false)
    }
    if (data) {
      setCustomersData(data)
    }
  }

  let CustomerDetailsTableBlock = ""
  if (customersData && customersData.length > 0) {
    CustomerDetailsTableBlock = (
      <CustomerDetailsTable customerData={customersData} />
    )
  }

  return (
    <div className="section">
      <Header />
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <table className="content-table">
            <thead className="content-thead">
              <th>S.No</th>
              <th>Customer ID</th>
              <th>Name</th>
              <th>Sex</th>
              <th>Age</th>
            </thead>
            {CustomerDetailsTableBlock}
          </table>

          {addressInfo && (
            <div className="details-container">
              <div className="wrapper">
                <h3 className="address-title">
                  Addresses for Selected Customer are below:
                </h3>
                <ul className="address-list">{addressInfo}</ul>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
export default Customers
