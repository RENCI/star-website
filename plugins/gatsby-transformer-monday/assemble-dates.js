/* This function massages row data into an array of date objects.
 * 
 * @param   array  columns    Monday response columns.
 * 
 * @return  array  dates as objects.
 * */
module.exports = function assembleDatesData({ columns, groups }) {

  const years = columns
    .filter(col => col.type === 'date')
    .reduce((acc, col) => {
      acc[col.id] = col.title
      return acc
    }, {})
  const dates = groups[0].items_page.items.map(item => {
    // the `Viewer` column has `id` of `status5` in the Monday board.
    const audience = item.column_values.find(col => col.id === 'status5').text
    const values = item.column_values
      .filter(col => col.id.startsWith('date'))
      .reduce((acc, { id, text }) => {
        acc.push({
          date: text,
          year: years[id],
        })
        return acc
      }, [])
    return {
      id: item.id,
      name: item.name,
      dates: values,
      audience,
    }
  })

  return dates
}