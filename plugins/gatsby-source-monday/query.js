module.exports = `query {
  boards(ids:[5267641585]) {
    columns {
      id
      settings_str
      title
      type
    }
    groups(ids:["group_title"]) {
      id
      title
      items_page {
        cursor
        items {
          id
          name
          column_values {
            id
            text
            column {
              id
              title
            }
            value
          }
        }
      }
    }
  }
}`