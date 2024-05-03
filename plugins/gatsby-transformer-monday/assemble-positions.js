const columnMap = require('./column-map')

/* This function massages row data into an array of position objects
 * with fields defined by `columnMap.positions` 
 * 
 * @param   array  groups     Monday response groups defined in query.
 * 
 * @return  array  positions as objects.
 * */
module.exports = function assemblePositionData({ groups }) {
  if (!groups) { return }
  return groups.reduce((acc, group) => {
    acc.push(...group.items_page.items.reduce((itemAcc, item) => {
        const { id, name, column_values } = item
        const extractedColumnValues = column_values
          .reduce((itemAcc, { column, text }) => {
            if (column.title in columnMap) {
              itemAcc[columnMap[column.title]] = text
            }
            return itemAcc
          }, {})
        itemAcc.push({
          id,
          name,
          status: group.title,
          ...extractedColumnValues,
        })
        return itemAcc
      }, []))
    return acc
  }, [])
}