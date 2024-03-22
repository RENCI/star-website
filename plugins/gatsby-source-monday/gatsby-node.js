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
      settings_str
      title
      type
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
  'Minimum Education': 'education',
  'RENCI Domain': 'domain',
  'Group': 'group',
  'Project/Team Name': 'division',
  'Semester': 'semester',
  'Anticipated Start Date': 'startDate',
  'Estimated Duration (in weeks)': 'duration',
  'Project Abstract': 'abstract',
  'Position Description': 'description',
  'Pay Range': 'pay',
  'PD Link': 'url',
}

/* This function massages column data into a form suitable for building
 *  position filters client-side. Our filters are select boxes, so we'll
 *  only need to consider columns with enumerable possible values; that is 
 *  only those with a type of `status`. Additionally, we only care about
 *  those appearing in the `columnMap` object.
 * 
 * @param   array  columns    Monday response columns defined in query above.
 * 
 * @return  array  columns as objects.
 * */
function assembleColumnData({ columns }) {
  return columns.reduce((acc, column) => {
    const { id, title, type, settings_str } = column
    const { labels = {} } = JSON.parse(settings_str)
    if (title in columnMap && type === 'status') {
      acc.push({
        id,
        // `field` defines the property on position objects,
        // client-side, that correpond to this column on positions.
        field: columnMap[title],
        options: Object.values(labels),
        title,
      })
    }
    return acc
  }, [])
}

/* This function massages row data into an array of position objects
 * with fields defined by `columnMap` 
 * 
 * @param   array  columns    Monday response columns defined in query above.
 * @param   array  items      Monday response items defined in query above.
 * 
 * @return  array  positions as objects.
 * */
function assemblePositionData({ groups }) {
  if (!groups) { return }
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

    // fetch the board data
    axiosOptions.headers.Authorization = `bearer ${ pluginOptions.API_TOKEN }`
    sourcingTimer.setStatus(`Fetching positions`)
    const boardData = await fetchBoardData(axiosOptions)
    if (!boardData) {
      throw new Error(`Failed to fetch positions`)
    }

    // massage column data and create column nodes
    sourcingTimer.setStatus(`Assembling position data`)
    const columnData = assembleColumnData(boardData)
    if (!columnData) {
      throw new Error(`Failed to process column data`)
    }
    sourcingTimer.setStatus(`Sourced ${ columnData.length } columns`)
    for (const column of columnData) {
      actions.createNode({
        ...column,
        parent: null,
        children: [],
        internal: {
          type: 'MondayColumn',
          contentDigest: createContentDigest(column)
        }
      })
    }
    sourcingTimer.setStatus(`Created ${ columnData.length } column nodes`)
    
    // massage position data and create position nodes
    sourcingTimer.setStatus(`Assembling position data`)
    const positionData = assemblePositionData(boardData)
    if (!positionData) {
      throw new Error(`Failed to process position data`)
    }
    sourcingTimer.setStatus(`Sourced ${ positionData.length } positions`)
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


