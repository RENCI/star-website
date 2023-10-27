const axios = require('axios')
const fs = require('fs')

const API_URL = `https://api.monday.com/v2`
const axiosOptions = { headers: {
  'API-Version': '2023-10',
} }

//

const query = `query {
  boards(ids:[5267641585]) {
    columns {
      id
      title
    }
    groups(ids:["group_title"]) {
      id
      title
      items_page {
        cursor
        items {
          id
          name
          column_values {
            id
            text
            column {
              id
              title
            }
            value
          }
        }
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
const columnMap = {
  'Program': 'program',
  'RENCI Domain': 'domain',
  'Group': 'group',
  'Project/Team Name': 'division',
  'Semester': 'semester',
  'Anticipated Start Date': 'startDate',
  'Position Description': 'description',
  'Estimated Duration (in weeks)': 'duration',
}

/* Turns column and row data into an array of position objects
 * with fields defined by `columnMap` 
 * 
 * @param {array}  columns  Monday response columns defined in query above.
 * @param {array}  items    Monday response items defined in query above.
 * 
 * @return {array}  position objects.
 * */
function assembleBoardData({ columns, groups }) {
  if (!columns || !groups) { return }
  return groups[0].items_page.items.reduce((acc, item) => {
    const { id, name, column_values } = item
    const extractedColumnValues = column_values
      .reduce((acc, { column, text }) => {
        if (column.title in columnMap) {
          acc[columnMap[column.title]] = text
        }
        return acc
      }, {})
    acc.push({ id, name, ...extractedColumnValues })
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


