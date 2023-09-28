import React from 'react'
import { Section } from '../section'
import { useSectionContent } from '../../hooks'

export const ProgramsOverview = () => {
  const content = useSectionContent('ProgramsOverview')

  return (
    <Section
      backgroundColor="#00abc722"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}
