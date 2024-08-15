const assemblePositionData = require('./assemble-positions')
const assembleColumnData = require('./assemble-columns')
const assembleDatesData = require('./assemble-dates')

const DEBUG = false

async function onCreateNode({
  actions,
  createContentDigest,
  loadNodeContent,
  node,
  reporter,
}) {
  const timer = reporter.activityTimer(`transforming Monday.com boards`)

  timer.setStatus(`Look for boards`)

  if (!node) {
    return
  }

  if (node.internal.type !== 'MondayBoard') {
    return
  }


  const createPositionNodes = positionData => {
    timer.setStatus(`Create PositionItem nodes`)
    for (const position of positionData) {
      actions.createNode({
        ...position,
        parent: null,
        children: [],
        internal: {
          type: 'PositionItem',
          contentDigest: createContentDigest(position)
        }
      })
    }
  }

  const createColumnNodes = columnData => {
    timer.setStatus(`Create PositionColumn nodes`)
    for (const column of columnData) {
      actions.createNode({
        ...column,
        parent: null,
        children: [],
        internal: {
          type: 'PositionColumn',
          contentDigest: createContentDigest(column)
        }
      })
    }
  }

  const createDateNodes = datesData => {
    timer.setStatus(`Create ImportantDate nodes`)
    datesData.forEach(date => {
      actions.createNode({
        ...date,
        parent: null,
        children: [],
        internal: {
          type: 'ImportantDate',
          contentDigest: createContentDigest(date)
        }
      })
    })
  }

  try {
    if (node.id === `6391840129`) {
      const datesData = assembleDatesData(node)
      if (DEBUG) { console.log(JSON.stringify(datesData, null, 2)) }
      createDateNodes(datesData)
      timer.setStatus(`Created ImportantDate nodes`)
    }
    
    if (node.id === `5267641585`) {
      const positionData = assemblePositionData(node)
      if (DEBUG) { console.log(JSON.stringify(positionData, null, 2)) }
      createPositionNodes(positionData)
      timer.setStatus(`Created PositionItem nodes`)

      const columnData = assembleColumnData(node)
      if (DEBUG) { console.log(JSON.stringify(columnData, null, 2)) }
      createColumnNodes(columnData)
      timer.setStatus(`Created PositionColumn nodes`)
    }
  } catch (error) {
    timer.panicOnBuild(error)
    timer.setStatus(`Could not transform Monday.com position and dates boards.`)
  }

}

exports.onCreateNode = onCreateNode
