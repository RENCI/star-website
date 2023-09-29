import React from 'react'
import { Section } from '../section'
import { useSectionContent } from '../../hooks'

export const KeyContacts = () => {
  const content = useSectionContent('KeyContacts')

  return (
    <Section>
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}
