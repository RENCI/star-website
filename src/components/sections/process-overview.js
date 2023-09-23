import React from 'react'
import { Section } from '../section'

export const ProcessOverview = ({ content }) => {
  return (
    <Section>
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}