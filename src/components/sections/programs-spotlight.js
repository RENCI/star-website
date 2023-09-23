import React from 'react'
import PropTypes from 'prop-types'
import { Section } from '../section'

export const ProgramsSpotlight = ({ content }) => {
  return (
    <Section
      backgroundColor="#00abc722"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}

ProgramsSpotlight.propTypes = {
  content: PropTypes.shape({
    programs: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    )
  }),
}
