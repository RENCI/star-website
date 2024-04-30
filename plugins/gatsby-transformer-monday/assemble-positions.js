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