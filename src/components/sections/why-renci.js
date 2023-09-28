import React from 'react'
import { Section } from '../section'
import { useSectionContent } from '../../hooks'

export const WhyRenci = () => {
  const content = useSectionContent('AboutStar')

  return (
    <Section
      backgroundColor="#00abc766"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}
