import React from 'react'
import { Section } from '../section'

import content from '../../content/resources.yaml'

export const Resources = () => {
  return (
    <Section
      height="40vh"
      backgroundColor="#00abc744"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}