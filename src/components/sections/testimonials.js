import React, { useEffect, useState, Fragment } from 'react'
import { Divider, Typography, Box } from '@mui/joy'
import { Section } from '../section'

const Quote = ({ quote, attribution, visible }) => {
  return (
    <Fragment>
      <Typography level="body-md" sx={{
        display: visible ? 'block' : 'none',
        fontSize: '1.5rem',
        textAlign: 'left'
      }}>
        { quote }
      </Typography>
      <Typography level="body-sm" sx={{ fontStyle: 'italic', textAlign: 'right', fontSize: '1rem' }}>
      - { attribution }
      </Typography>
    </Fragment>
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
      backgroundColor="#33333310"
      title={title}
    >
      <Divider sx={{ width: '75%', m: '0rem auto 1rem' }} />
      <Box sx={{maxWidth: '900px'}}>
        {
          quotes.map((item, i) => (
            <Quote
              key={ `testimonial-${ i }` }
              visible={ index === i }
              { ...item }
            />
          ))
        }
      </Box>
    </Section>
  )
}
