import React from 'react'
import { Section } from '../section'
import { useSectionContent } from '../../hooks'

export const ProcessOverview = () => {
  const content = useSectionContent('ProcessOverview')

  return (
    <Section>
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}
