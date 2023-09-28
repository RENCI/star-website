import React from 'react'
import { Section } from '../section'
import { useSectionContent } from '../../hooks'

export const ImportantDates = () => {
  const content = useSectionContent('ImportantDates')

  return (
    <Section
      backgroundColor="#00abc7cc"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}
