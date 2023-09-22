import React from 'react'
import { Section } from '../section'

import content from '../../content/key-contacts.yaml'

export const KeyContacts = () => {
  return (
    <Section>
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}