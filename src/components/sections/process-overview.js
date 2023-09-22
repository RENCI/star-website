import React from 'react'
import { Section } from '../section'

import content from '../../content/process-overview.yaml'

export const ProcessOverview = () => {
  return (
    <Section>
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}