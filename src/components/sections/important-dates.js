import React from "react"
import { Section } from "../section"
import { DatesTable } from '../dates-table'
import ImportantDatesContent from '../../content/sections/important-dates.yaml'

export const ImportantDates = ( ) => {

  return (
    <Section title='Important Dates' backgroundColor="#fff" height="55vh">
      <DatesTable content={ImportantDatesContent} type="staff"/>
    </Section>
  )
}
