import React from 'react'
import { Section } from '../section'

import content from '../../content/important-dates.yaml'

export const ImportantDates = () => {
  return (
    <Section
      backgroundColor="#00abc7cc"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}