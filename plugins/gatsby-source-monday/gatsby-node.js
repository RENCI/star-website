const fs = require('fs')

const fetchBoardData = require('./fetch-board-data')

const axiosOptions = { headers: {
  'API-Version': '2023-10',
} }

exports.sourceNodes = async (gatsbyApi, pluginOptions) => {
  const { actions, createContentDigest, createNodeId, reporter } = gatsbyApi
  const sourcingTimer = reporter.activityTimer(`source boards from Monday.com`)

  function createBoardNode(data) {
    // console.log(JSON.stringify(data, null, 2))
    actions.createNode({
      ...data,
      parent: null,
      children: [],
      internal: {
        type: 'MondayBoard',
        contentDigest: createContentDigest(data)
      },
    })
  }

  sourcingTimer.start()
  try {
    // fetch the board data
    axiosOptions.headers.Authorization = `bearer ${ pluginOptions.API_TOKEN }`
    sourcingTimer.setStatus(`Fetching board data`)
    const boardData = await fetchBoardData(axiosOptions)
    if (!boardData) {
      throw new Error(`Failed to fetch board data`)
    }

    // create board nodes
    sourcingTimer.setStatus(`Assembling board data`)
    if (!boardData) {
      throw new Error(`Failed to process board data`)
    }
    sourcingTimer.setStatus(`Sourced ${ Object.keys(boardData).length } boards`)
    Object.keys(boardData).forEach(key => {
      createBoardNode(boardData[key][0])
    })
    sourcingTimer.setStatus(`Created ${ Object.keys(boardData).length } board nodes`)
  } catch (error) {
    sourcingTimer.panicOnBuild(error)
    sourcingTimer.setStatus(`Could not source boards from API.`)
  }
}


