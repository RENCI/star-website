const assemblePositionData = require('./assemble-positions')
const assembleColumnData = require('./assemble-columns')
const assembleDatesData = require('./assemble-dates')

async function onCreateNode({ actions, createContentDigest, loadNodeContent, node}) {

  if (node.internal.type !== 'MondayBoard') {
    return
  }

  // using this function throws an error. will look into.
  // const nodeContent = await loadNodeContent(node)

  if (!node) {
    return
  }

  const createPositionNodes = positionData => {
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
    console.log(datesData)

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

  if (node.id === `6391840129`) {
    console.log('DATES')
    
    const datesData = assembleDatesData(node)
    console.log(JSON.stringify(datesData, null, 2))
    createDateNodes(datesData)
  }
  
  if (node.id === `5267641585`) {
    console.log('POSITIONS')
    
    const positionData = assemblePositionData(node)
    console.log(JSON.stringify(positionData, null, 2))
    createPositionNodes(positionData)

    console.log('COLUMNS')
    const columnData = assembleColumnData(node)
    console.log(JSON.stringify(columnData, null, 2))
    createColumnNodes(columnData)
  }

}

exports.onCreateNode = onCreateNode
