import React from 'react'
import {Table, Box} from "@mui/joy/"

export const DatesTable = ({content, type}) => {
  const createDatesArray = (content) => {
    const { date_titles, dates } = content
    const keysArray = Object.keys(date_titles)

    return keysArray.map((key) => {
      const semesterDates = dates.map((date) => date.semester_dates[key]);
      return [date_titles[key], ...semesterDates];
    });
  }

  const datesArray = createDatesArray(content)

  const studentsArray = [
    datesArray[2],
    datesArray[3],
    datesArray[4],
    datesArray[5],
    datesArray[7],
    datesArray[8],
    datesArray[9]
  ]

  const staffArray = [
    datesArray[0],
    datesArray[1],
    datesArray[2],
    datesArray[4],
    datesArray[6],
    datesArray[7],
    datesArray[8]
  ]
  return (
    <Box sx={{ backgroundColor: "#fff",marginTop: '1rem'}}>

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
        <th style={{ width: "35%" }} aria-hidden="true"></th>
        {content.dates.map(({semester}, i) => (
          <th key={`semester-${i}`}>{semester}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      { type==="students" ? studentsArray.map((row, rowIndex) => (
        <tr key={`important-dates-row-${rowIndex}`}>
          {row.map((cell, cellIndex) => (
            <td key={`important-dates-row-${rowIndex}-cell-${cellIndex}`}>{cell}</td>
          ))}
        </tr>
      )) : staffArray.map((row, rowIndex) => (
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