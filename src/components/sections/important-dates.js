import React from "react"
import { Section } from "../section"
import Table from "@mui/joy/Table"
import Sheet from "@mui/joy/Sheet"
import { DatesTable } from '../dates-table'

export const ImportantDates = ({ content }) => {
  
  return (
    <Section title={content.title} backgroundColor="#fff" height="55vh">
      <DatesTable content={content}/>
    </Section>
  )
}
