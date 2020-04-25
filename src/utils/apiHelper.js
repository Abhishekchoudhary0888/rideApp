import axios from "axios"

export const apiGetHelper = async (URL, contentType) => {
  try {
    const responseData = await axios.get(URL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
      },
    })
    return responseData
  } catch (e) {
    console.log(e) // Santry we can log Error
  }
}
