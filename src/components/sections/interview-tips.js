import React from 'react'
import { Section } from '../section'

export const InterviewTips = ({ content }) => {
  
  return (
    <Section
      title={content.title}  
      height="50vh"
      backgroundColor="#44668833"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}
