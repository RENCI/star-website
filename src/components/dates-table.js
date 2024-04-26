import React from 'react'
import {Table, Box} from "@mui/joy/"

export const DatesTable = ({content}) => {
  const createDatesArray = (content) => {
    const { date_titles, dates } = content
    const keysArray = Object.keys(date_titles)

    return keysArray.map((key) => {
      const semesterDates = dates.map((date) => date.semester_dates[key]);
      return [date_titles[key], ...semesterDates];
    });
  }

  const datesArray = createDatesArray(content)

  return (
    <Box sx={{ backgroundColor: "#ffffff95",marginTop: '1rem'}}>

    <Table
    color="neutral"
    size="md"
    stickyHeader
    stripe="odd"
    hoverRow
    variant="outlined"
    aria-label="important dates table"
  >
    <thead>
      <tr>
        <th style={{ width: "35%" }}></th>
        {content.dates.map(({semester}, i) => (
          <th key={`semester-${i}`}>{semester}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {datesArray.map((row, rowIndex) => (
        <tr key={`important-dates-row-${rowIndex}`}>
          {row.map((cell, cellIndex) => (
            <td key={`important-dates-row-${rowIndex}-cell-${cellIndex}`}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </Table>
  </Box>

  )
}