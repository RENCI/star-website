const axios = require('axios')
const query = require('./query')
const API_URL = `https://api.monday.com/v2`

module.exports = async function fetchBoardData(options) {
  try {
    const response = await axios.post(API_URL, { query }, options)
    if (response?.status !== 200 || !response?.data) {
      return
    }
    return response.data.data.boards[0]
  } catch (error) {
    console.error(error)
    return []
  }
}

