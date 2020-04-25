import { apiGetHelper } from "./apiHelper"

export const fetchCustomerDetailstGetApi = (queryString) => {
  const URL = "http://localhost:3000/customerData.json"
  const response = apiGetHelper(URL)
  return response
}
