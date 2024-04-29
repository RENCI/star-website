import React, { useEffect, useState } from 'react'
import { Divider, Typography, Box, Container } from '@mui/joy'
import { Section } from '../section'

const Quote = ({ quote, attribution, visible }) => {
  return (
    <Box sx={{display: visible ? 'block' : 'none'}}>
      <Typography level="body-md" sx={{
        fontSize: '1.4rem',
        textAlign: 'center',
        fontStyle: 'italic', 
      }}>
        { quote }
      </Typography>
      <Typography level="body-sm" sx={{ 
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
    }, 5000)

    return () => clearTimeout(wait)
  }, [index, quotes])

  return (
    <Section
      backgroundColor="#33333310"
      title={title}
    >
      <Divider sx={{ width: '75%', m: '0rem auto 1rem' }} />
      
      <Container sx={{ minHeight:'14rem' }}>
        {
          quotes.map((item, i) => (
            <Quote
              key={ `testimonial-${ i }` }
              visible={ index === i }
              { ...item }
            />
          ))
        }
      </Container>
    </Section>
  )
}
