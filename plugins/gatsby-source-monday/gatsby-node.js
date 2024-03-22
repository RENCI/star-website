const fs = require('fs')

const fetchBoardData = require('./fetch-board-data')
const assemblePositionData = require('./assemble-positions')
const assembleColumnData = require('./assemble-columns')

const sampleData = require('./sample-data.json')

const axiosOptions = { headers: {
  'API-Version': '2023-10',
} }

const createPositionNodes = (gatsbyApi, positionData) => {
  for (const position of positionData) {
    gatsbyApi.actions.createNode({
      ...position,
      parent: null,
      children: [],
      internal: {
        type: 'MondayItem',
        contentDigest: gatsbyApi.createContentDigest(position)
      }
    })
  }
}

const createColumnNodes = (gatsbyApi, columnData) => {
  for (const column of columnData) {
    gatsbyApi.actions.createNode({
      ...column,
      parent: null,
      children: [],
      internal: {
        type: 'MondayColumn',
        contentDigest: gatsbyApi.createContentDigest(column)
      }
    })
  }
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
    createColumnNodes(gatsbyApi, columnData)
    sourcingTimer.setStatus(`Created ${ columnData.length } column nodes`)
    
    // massage position data and create position nodes
    sourcingTimer.setStatus(`Assembling position data`)
    const positionData = assemblePositionData(boardData)
    if (!positionData) {
      throw new Error(`Failed to process position data`)
    }
    sourcingTimer.setStatus(`Sourced ${ positionData.length } positions`)
    createPositionNodes(gatsbyApi, positionData)
    sourcingTimer.setStatus(`Created ${ positionData.length } position nodes`)
    
  } catch (error) {
    sourcingTimer.panicOnBuild(error)
    sourcingTimer.setStatus(`Could not source positions from API; using fallback data`)

    sourcingTimer.setStatus(`Assembling sample position data`)
    createColumnNodes(gatsbyApi, sampleData.columns)
    
    sourcingTimer.setStatus(`Assembling sample position data`)
    createPositionNodes(gatsbyApi, sampleData.positions)

    sourcingTimer.setStatus(`Created ${ sampleData.positions.length } sample position nodes`)
  }
}


