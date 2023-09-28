import React from 'react'
import { Section } from '../section'
import { useSectionContent } from '../../hooks'

export const Forms = () => {
  const content = useSectionContent('Forms')

  return (
    <Section>
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}
