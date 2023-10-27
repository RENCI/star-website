import React from 'react'
import { Section } from '../section'
import { VerticalTabsList } from '../vertical-tabs-list'

export const ProgramsOverview = ({ content }) => {
  
  return (
    <Section
    title={content.title}  
    backgroundColor="#00abc722"
    >
      <VerticalTabsList programs={content.programs}/>
    </Section>
  )
}
