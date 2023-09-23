import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
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

Testimonials.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    quotes: PropTypes.arrayOf(
      PropTypes.shape({
        quote: PropTypes.string.isRequired,
        attribution: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  })
}
