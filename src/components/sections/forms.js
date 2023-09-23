import React from 'react'
import { Section } from '../section'

export const Forms = ({ content }) => {
  return (
    <Section>
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}
