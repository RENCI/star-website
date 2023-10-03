import React from 'react'
import { Section } from '../section'

export const WhyRenci = ({ content }) => {
  
  return (
    <Section
      backgroundColor="#00abc766"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}
