import React from "react"
import { Section } from "../section"
import { Box } from "@mui/joy"

export const ImportantDates = ({ content }) => {
  return (
    <Section title={content.title} backgroundColor="#fff" height="55vh">
      <Box
        component="pre"
        sx={{ whiteSpace: 'pre-wrap', fontSize: '75%' }}
      >
        {JSON.stringify(content, null, 2)}
      </Box>
    </Section>
  )
}
