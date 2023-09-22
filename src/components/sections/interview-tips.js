import React from 'react'
import { Section } from '../section'

import content from '../../content/interview-tips.yaml'

export const InterviewTips = () => {
  return (
    <Section
      height="50vh"
      backgroundColor="#44668833"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}