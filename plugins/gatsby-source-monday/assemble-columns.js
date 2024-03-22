const columnMap = require('./column-map')

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
module.exports = function assembleColumnData({ columns }) {
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

