import React from 'react'
import { Section } from '../section'

export const KeyContacts = ({ content }) => {
  
  return (
    <Section>
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}
