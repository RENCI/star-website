const axios = require('axios')
const fs = require('fs')

const API_URL = `https://api.monday.com/v2`
const axiosOptions = { headers: {} }

//

const query = `query {
  boards(ids:[3488406941]) {
    columns {
      id
      title
      settings_str
    }
    items {
      id
      name
      column_values {
        title
        value
      }
    }
  }
}`

async function fetchBoardData(options) {
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


// columns (keys) end up as item object properties (values)
const fieldMap = {
  'RENCI Division/Project Team': 'division',
  'Student Identified?': 'filled',
  'Position Title': 'title',
  'Estimated Start Date': 'startDate',
}

/* Turns column and row data into an array of position objects
 * with fields defined by `fieldMap` 
 * 
 * @param {array}  columns  Monday response columns defined in query above.
 * @param {array}  items    Monday response items defined in query above.
 * 
 * @return {array}  position objects.
 * */
function assembleBoardData({ columns, items }) {
  if (!columns || !items) { return }
  return items.reduce((acc, item) => {
    const { id, name, column_values } = item
    const extractedColumns = column_values
      .reduce((acc, { title, value }) => {
        if (title in fieldMap) {
          acc[fieldMap[title]] = JSON.parse(value)
        }
        return acc
      }, {})
    acc.push({ id, manager: name, ...extractedColumns })
    return acc
  }, [])
}

exports.sourceNodes = async (gatsbyApi, pluginOptions) => {
  const { actions, createContentDigest, createNodeId, reporter } = gatsbyApi
  const sourcingTimer = reporter.activityTimer(`source positions from Monday.com`)
  sourcingTimer.start()
  try {
    axiosOptions.headers.Authorization = `bearer ${ pluginOptions.API_TOKEN }`
    sourcingTimer.setStatus(`Fetching positions`)
    const boardData = await fetchBoardData(axiosOptions)
    if (!boardData) {
      throw new Error(`Failed to fetch positions`)
    }
    sourcingTimer.setStatus(`Assembling position data`)
    const positionData = assembleBoardData(boardData)
    if (!positionData) {
      throw new Error(`Failed to process position data`)
    }
    sourcingTimer.setStatus(`Sourced ${ positionData.length } positions`)
    // create nods from positions data.
    for (const position of positionData) {
      actions.createNode({
        ...position,
        parent: null,
        children: [],
        internal: {
          type: 'MondayItem',
          contentDigest: createContentDigest(position)
        }
      })
    }
    sourcingTimer.setStatus(`Created ${ positionData.length } position nodes`)
  } catch (error) {
    sourcingTimer.panicOnBuild(error)
  }
}


