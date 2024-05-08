import React from "react"
import { Section } from "../section"
import { DatesTable } from '../dates-table'
import ImportantDatesContent from '../../content/sections/important-dates.yaml'

export const ImportantDates = ({ content }) => {
  const rows = content.nodes.map(({ name, dates, audience }) => ({
    name,
    dates: dates.reduce((acc, d) => {
      acc[d.year] = d.date
      return acc
    }, {}),
    audience,
  }))


  return (
    <Section title='Important Dates' backgroundColor="#fff" height="55vh">
      <DatesTable content={ImportantDatesContent} type="staff"/>
    </Section>
  )
}
