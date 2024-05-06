const fs = require('fs')

const fetchBoardData = require('./fetch-board-data')

const axiosOptions = { headers: {
  'API-Version': '2023-10',
} }

exports.sourceNodes = async (gatsbyApi, pluginOptions) => {
  const { actions, createContentDigest, createNodeId, reporter } = gatsbyApi
  const timer = reporter.activityTimer(`source Monday.com boards`)

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

  timer.start()
  try {
    // fetch the board data
    axiosOptions.headers.Authorization = `bearer ${ pluginOptions.API_TOKEN }`
    timer.setStatus(`Fetching board data`)
    const boardData = await fetchBoardData(axiosOptions)
    if (!boardData) {
      throw new Error(`Failed to fetch board data`)
    }

    // create board nodes
    timer.setStatus(`Assembling board data`)
    if (!boardData) {
      throw new Error(`Failed to process board data`)
    }
    timer.setStatus(`Sourced ${ Object.keys(boardData).length } boards`)
    Object.keys(boardData).forEach(key => {
      createBoardNode(boardData[key][0])
    })
    timer.setStatus(`Created ${ Object.keys(boardData).length } board nodes`)
  } catch (error) {
    timer.panicOnBuild(error)
    timer.setStatus(`Could not source boards from API.`)
  }
}


