const fs = require('fs')

const fetchBoardData = require('./fetch-board-data')
const assemblePositionData = require('./assemble-positions')
const assembleColumnData = require('./assemble-columns')

const axiosOptions = { headers: {
  'API-Version': '2023-10',
} }

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


