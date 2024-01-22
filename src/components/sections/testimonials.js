import React, { useEffect, useState } from 'react'
import { Divider, Typography } from '@mui/joy'
import { Section } from '../section'

const Quote = ({ quote, attribution, visible }) => {
  return (
    <Typography level="body-md" sx={{
      display: visible ? 'block' : 'none',
    }}>
      { quote } <br />
      - { attribution }
    </Typography>
  )
}

export const Testimonials = ({ content }) => {
  const { title, quotes } = content
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const wait = setTimeout(() => {
      setIndex((index + 1) % quotes.length)
    }, 3000)

    return () => clearTimeout(wait)
  }, [index, quotes])

  return (
    <Section
      height="40vh"
      backgroundColor="#3333"
      title="What Previous STARs say..."
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
