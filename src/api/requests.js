const axios = require('axios')

const AUTH = process.env.REACT_APP_AUTH

export const setLight = async (color, id) => {
  const lightUrl = `${process.env.REACT_APP_BASE_URL}/lights/${id}/state/`
  const res = await axios.put(lightUrl, color, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AUTH
      }
    })
  console.log(res)
}

export const getConfig = async () => {
  const CONFIG_URL = `${process.env.REACT_APP_BASE_URL}/config/`
  const res = await axios.get(CONFIG_URL,
  {
    headers: {
      'Authorization': `${AUTH}`,
      'Access-Control-Allow-Credentials': true
    }
  })
  console.log(res)
}