import React from 'react'
import { Section } from '../section'

export const Resources = ({ content }) => {
  return (
    <Section
      height="40vh"
      backgroundColor="#00abc744"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}