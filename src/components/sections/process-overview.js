import React from 'react'
import { Section } from '../section'
import { TitleBodyItem } from '../title-body-item'

export const ProcessOverview = ({ content }) => {

  return (
    <Section
      backgroundColor="#F6F6F6"
      title={content.title}
    >
      {
        content.steps.map((item)=>(<TitleBodyItem item={item} key={item.title}/>))
      }
    </Section>
  )
}
