import React from 'react'
import { Section } from '../section'
import { useSectionContent } from '../../hooks'

export const InterviewTips = () => {
  const content = useSectionContent('InterviewTips')

  return (
    <Section
      height="50vh"
      backgroundColor="#44668833"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}
