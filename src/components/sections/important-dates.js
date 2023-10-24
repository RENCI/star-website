import React from "react"
import { Section } from "../section"
import Table from "@mui/joy/Table"
import Sheet from "@mui/joy/Sheet"

export const ImportantDates = ({ content }) => {
  const Dates = [
    [
      "Position Description Completed",
      "Friday, July 21, 2023",
      "Friday, December 1, 2023",
      "Friday, April 12, 2024",
    ],
    [
      "Hiring Decisions Completed",
      "Friday, August 11, 2023",
      "Friday, December 22, 2023",
      "Friday, May 3, 2024",
    ],
    [
      "Job Offer Decision Form Due (from Student)",
      "Wednesday, August 16, 2023",
      "Wednesday, January 3, 2024",
      "Wednesday, May 8, 2024",
    ],
    [
      "UNC Classes Begin",
      "Monday, August 21, 2023",
      "Wednesday, January 10, 2024",
      "Wednesday, May 15, 2024",
    ],
    [
      "Critical Onboarding Paperwork Due",
      "Wednesday, August 23, 2023",
      "Wednesday, January 10, 2024",
      "Thursday, May 16, 2024",
    ],
    [
      "Prepping for Day 1 Tasks Due",
      "Wednesday, August 30, 2023",
      "Wednesday, January 17, 2024",
      "Thursday, May 23, 2024",
    ],
  ]

  return (
    <Section title={content.title} backgroundColor="#00abc7cc">
      <Sheet>
        <Table
          color="neutral"
          size="sm"
          stickyHeader
          stripe="odd"
          variant="outlined"
          aria-label="important dates table"
        >
          <thead>
            <tr>
              <th style={{ width: "40%" }}></th>
              <th>FALL SEMESTER 2023</th>
              <th>SPRING SEMESTER 2024</th>
              <th>SUMMER SEMESTER 2024</th>
            </tr>
          </thead>
          <tbody>
            {Dates.map(row => (
              <tr>
                {row.map(cell => (
                  <td>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
      {/* <pre>{ JSON.stringify(content) }</pre> */}
    </Section>
  )
}
