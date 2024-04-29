import React, { useEffect, useState } from 'react'
import { Divider, Typography, Box } from '@mui/joy'
import { Section } from '../section'

const Quote = ({ quote, attribution, visible }) => {
  return (
    <Box sx={{display: visible ? 'block' : 'none'}}>
      <Typography level="body-md" sx={{
        fontSize: '1.4rem',
        textAlign: 'left',
      }}>
        { quote }
      </Typography>
      <Typography level="body-sm" sx={{ 
        fontStyle: 'italic', 
        textAlign: 'right', 
        fontSize: '1.1rem',
        fontWeight: 500,
        paddingTop: '1rem',
        letterSpacing: '0.1px' 
      }}>
      - { attribution }
      </Typography>
    </Box>
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
    >
      <Typography level="h2">{title}</Typography>

      <Divider sx={{ width: '75%', m: '0rem auto 1rem' }} />
      <Box sx={{maxWidth: '900px', height: '25vh'}}>
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
