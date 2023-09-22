import React from 'react'
import { Section } from '../section'

import content from '../../content/why-renci.yaml'

export const WhyRENCI = () => {
  return (
    <Section
      backgroundColor="#00abc766"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}
