import React from 'react'
import { Section } from '../section'
import { Carousel } from '../carousel'

export const StarShowcase = ({ content }) => {
  
  return (
    <Section
      title={content.title}
      height="55vh"
    >
        <Carousel students={content.students} />
    </Section>
  )
}
