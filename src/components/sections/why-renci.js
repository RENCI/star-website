import React from 'react'
import PropTypes from 'prop-types'
import { Section } from '../section'

export const WhyRenci = ({ content }) => {
  return (
    <Section
      backgroundColor="#00abc766"
    >
      <pre>{ JSON.stringify(content) }</pre>
    </Section>
  )
}

WhyRenci.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    reasons: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  })
}
