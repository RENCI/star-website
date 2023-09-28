import React from 'react'
import { Section } from '../section'
import { useSectionContent } from '../../hooks'


export const ProjectShowcase = () => {
  const content = useSectionContent('ProjectShowcase')

  return (
    <Section
      height="75vh"
      backgroundColor="#3333"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}
