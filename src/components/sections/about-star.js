import React from 'react'
import PropTypes from 'prop-types'
import { Sheet, Typography } from '@mui/joy'
import { Section } from '../section'

export const AboutStar = ({ content }) => {
  return (
    <Section
      backgroundColor="#ff990033"
      height="33vh"
    >
      <Sheet sx={{
        backgroundColor: '#fff9',
        borderRadius: '1rem',
        p: 8, m: { xs: 2, md: 4},
      }}>
        <Typography level="h3">{ content.blurb }</Typography>
      </Sheet>
    </Section>
  )
}

AboutStar.propTypes = {
  content: PropTypes.shape({
    blurb: PropTypes.string.isRequired,
  })
}
