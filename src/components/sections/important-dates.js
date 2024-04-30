import React from "react"
import { Section } from "../section"
import { Box } from "@mui/joy"

export const ImportantDates = ({ content }) => {
  const rows = content.nodes.map(({ name, dates }) => ({
    name,
    dates: dates.reduce((acc, d) => {
      acc[d.year] = d.date
      return acc
    }, {}),
  }))


  return (
    <Section title={content.title} backgroundColor="#fff" height="55vh">
      <Box
        component="pre"
        sx={{ whiteSpace: 'pre-wrap', fontSize: '75%' }}
      >
        {JSON.stringify(rows, null, 2)}
      </Box>
    </Section>
  )
}
