import React from 'react'
import { Section } from '../section'

export const StarShowcase = ({ content }) => {
  
  return (
    <Section
      height="75vh"
      backgroundColor="#3333"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}
