module.exports = `query {
  dates: boards(ids:[6391840129]) {
    id
    columns(ids: ["date6","date4","date","date5","date42","status5"]) {
      id
      settings_str
      title
      type
    }
    
    groups(ids:["topics"]) {
      id
      title
      items_page {
        items {
          id
          name
          column_values(ids: ["date6","date4","date","date5","date42","status5"]) {
            id
            text
          }
        }
      }
    }
  }

  positions: boards(ids:[5267641585]) {
    id
    columns {
      id
      settings_str
      title
      type
    }
    groups(ids: ["group_title", "topics", "new_group"]) {
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