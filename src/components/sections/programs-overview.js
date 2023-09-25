import React from 'react'
import PropTypes from 'prop-types'
import { Section } from '../section'

export const ProgramsOverview = ({ content }) => {
  return (
    <Section
      backgroundColor="#00abc722"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}

ProgramsOverview.propTypes = {
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
