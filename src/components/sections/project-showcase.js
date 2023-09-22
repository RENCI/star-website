import React from 'react'
import { Section } from '../section'

import content from '../../content/project-showcase.yaml'

export const ProjectShowcase = () => {
  return (
    <Section
      height="75vh"
      backgroundColor="#3333"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}
