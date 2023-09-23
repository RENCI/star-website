import React from 'react'
import { Section } from '../section'

export const ProgramsSpotlight = ({ content }) => {
  return (
    <Section
      backgroundColor="#00abc722"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}