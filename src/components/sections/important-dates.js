import React from 'react'
import { Section } from '../section'

export const ImportantDates = ({ content }) => {
  return (
    <Section
      backgroundColor="#00abc7cc"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}