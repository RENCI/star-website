import React from 'react'
import { Section } from '../section'

import content from '../../content/forms.yaml'

export const Forms = () => {
  return (
    <Section>
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}
