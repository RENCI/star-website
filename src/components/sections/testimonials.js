import React, { useEffect, useState } from 'react'
import { Divider, Typography } from '@mui/joy'
import { Section } from '../section'

import content from '../../content/testimonials.yaml'

const Quote = ({ quote, attribution, visible }) => {
  return (
    <Typography paragraph sx={{
      display: visible ? 'block' : 'none',
    }}>
      { quote } <br />
      - { attribution }
    </Typography>
  )
}

export const Testimonials = () => {
  const { title, quotes } = content
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const wait = setTimeout(() => {
      setIndex((index + 1) % quotes.length)
    }, 3000)

    return () => clearTimeout(wait)
  }, [index, quotes.length])

  return (
    <Section
      height="75vh"
      backgroundColor="#f093"
    >
      <Typography level="h2">{ title }</Typography>
      
      <Divider sx={{ width: '75%', m: '2rem auto' }} />

      {
        quotes.map((item, i) => (
          <Quote
            key={ `testimonial-${ i }` }
            visible={ index === i }
            { ...item }
          />
        ))
      }
    </Section>
  )
}