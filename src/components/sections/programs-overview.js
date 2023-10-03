import React from 'react'
import { Section } from '../section'

export const ProgramsOverview = ({ content }) => {
  
  return (
    <Section
      backgroundColor="#00abc722"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}
