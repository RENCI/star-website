import React from 'react'
import { Section } from '../section'
import { useSectionContent } from '../../hooks'

export const Resources = () => {
  const content = useSectionContent('Resources')

  return (
    <Section
      height="40vh"
      backgroundColor="#00abc744"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}
