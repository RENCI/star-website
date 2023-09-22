import React from 'react'
import { Section } from '../section'

import content from '../../content/programs-spotlight.yaml'

export const ProgramsSpotlight = () => {
  return (
    <Section
      backgroundColor="#00abc722"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}