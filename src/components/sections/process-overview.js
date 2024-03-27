import React from 'react'
import { Section } from '../section'
import { TitleBodyItem } from '../title-body-item'

export const ProcessOverview = ({ content }) => {

  return (
    <Section
      title='Process Overview'

    >
      {
        content.steps.map((item)=>(<TitleBodyItem item={item}/>))
      }
    </Section>
  )
}
